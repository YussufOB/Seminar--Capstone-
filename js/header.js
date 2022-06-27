// Hamburger section

const menuBtn = document.querySelector('.nav-menu__btn');
const hamburger = document.querySelector('.nav-menu__hamburger');
const nav = document.querySelector('.nav-menu__list-wrapper');
const menuNNav = document.querySelector('.list');

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNNav.classList.add('open');
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNNav.classList.remove('open');
    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);

// Sticky Nav

const navbar = document.querySelector('.nav-menu');
const sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.onscroll = function () {
  stickyNav();
};
