// Replace these three values with your own from https://dashboard.emailjs.com/
const EMAILJS_PUBLIC_KEY = '3_yuEKv0ghe9wefdn';
const EMAILJS_SERVICE_ID = 'service_xrtbvpg';
const EMAILJS_TEMPLATE_ID = 'template_d3ks44v';

(function () {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
})();

function contact(event) {
    event.preventDefault()

    if (
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' ||
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID'
    ) {
      alert(
        'EmailJS is not configured yet. Add your Public Key, Service ID, and Template ID in script.js.'
      )
      return
    }

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    loading.classList.add('modal__overlay--visible')

    emailjs
        .sendForm(
            service_xrtbvpg,
            template_d3ks44v,
            event.target
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList.add('modal__overlay--visible')
        }).catch((error) => {
            loading.classList.remove('modal__overlay--visible')
            console.error('EmailJS error:', error)
            alert(
                `Could not send your message (${error?.text || 'unknown error'}). Please email me directly at brackesb12@gmail.com`
            )
        })
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}


let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}