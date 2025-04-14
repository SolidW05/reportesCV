const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

console.log("¿Botón encontrado?", menuOpenButton);

menuOpenButton.addEventListener('click', () => {
  //console.log("¡Botón clickeado!"); // Debug log
  document.body.classList.toggle("show-mobile-menu");
});

// Close the menu when the close button is clicked
menuCloseButton.addEventListener('click', () => menuOpenButton.click());

// Close the menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => menuOpenButton.click());
});
//Swinper 
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive breakpoints
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
    },
    }
});
