const CONTACT_EMAIL = 'brackesb12@gmail.com';
const REQUEST_TIMEOUT_MS = 10000;

async function contact(event) {
  event.preventDefault();

  if (window.location.protocol === 'file:') {
    alert(
      'The contact form must be opened through a web server or your live GitHub Pages site, not as a local HTML file.'
    );
    return;
  }

  const form = event.target;
  const submitButton = form.querySelector('#contact__submit');
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');

  const name = form.user_name.value.trim();
  const email = form.user_email.value.trim();
  const message = form.user_message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  submitButton.disabled = true;
  loading.classList.add('modal__overlay--visible');

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  const payload = new FormData();
  payload.append('name', name);
  payload.append('email', email);
  payload.append('message', message);
  payload.append('_subject', `Portfolio contact from ${name}`);
  payload.append('_template', 'table');
  payload.append('_captcha', 'false');

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: payload,
      signal: controller.signal,
    });

    let data = {};
    try {
      data = await response.json();
    } catch {
      throw new Error('Unexpected response from email service.');
    }

    const isSuccess = data.success === 'true' || data.success === true;

    if (!response.ok || !isSuccess) {
      throw new Error(data.message || 'Unable to send message.');
    }

    loading.classList.remove('modal__overlay--visible');
    success.classList.add('modal__overlay--visible');
    form.reset();
  } catch (error) {
    loading.classList.remove('modal__overlay--visible');

    const reason = error.name === 'AbortError'
      ? 'The request timed out after 10 seconds'
      : error.message;

    alert(
      `Could not send your message (${reason}). Please email me directly at ${CONTACT_EMAIL}`
    );
  } finally {
    clearTimeout(timeoutId);
    submitButton.disabled = false;
  }
}

function moveBackground(event) {
  const shapes = document.querySelectorAll('.shape');
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`;
  }
}

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += ' dark-theme';
  } else {
    document.body.classList.remove('dark-theme');
  }
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove('modal--open');
  }
  isModalOpen = true;
  document.body.classList += ' modal--open';
}
