// template_d3ks44v
// service_hlefoil
// 3_yuEKv0ghe9wefdn

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const sucess = document.querySelector('.modal__overlay--sucess')
     
    emailjs
        .sendForm(
            'service_hlefoil',
            'template_d3ks44v',
            event.target,
            'user_3_yuEKv0ghe9wefdn'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            sucess.classList += " modal__overlay--visible";
            }).catch(() => {
            loading.classList.remove("modal__overlay--visible");  
            alert(
                "The email service is temporarily unavailable. Please contact me directly on abc@gmail.com"
            );
            })
}

    

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

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

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

let isModalOpen = false;
function toggleModal( {
    if (modalOpen) {
        isModalOpen = false;
        return document.body.classList.remove ("modal--open")
    }
    isModalOpen = !isModalOpen
    document.body.classList += " modal--open"
    // toggle modal
})

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_80ih0if",
      "template_d9refyl",
      event.target,
      "user_K1PoFs8pB2YVWStDxrUls"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email@email.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}