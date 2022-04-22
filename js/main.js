const menuBtn = document.querySelector('.nav-menu__btn');
const hamburger = document.querySelector('.nav-menu__hamburger');
const nav = document.querySelector('.nav-menu__list-wrapper');
const menuNNav = document.querySelector('.list');
const navItems = document.querySelectorAll('.menu-nav__item');
const moreBtn = document.getElementById('more');
const less = document.getElementById('less');
const hideSpeaker = document.querySelector('.hide-speaker');
const body = document.querySelector('body');
const sponsorers = document.createElement('section');

const projectData = [
  {
    brand1: 'images/bitpander.png',
    brand2: 'images/bibox.jpeg',
    brand3: 'images/d-block.png',
    brand4: 'images/cryptopia.png',
    brand5: 'images/binance.png',
    copyright: 'images/gatex-logo.png',
  },
  {
    icon: 'images/workshop.png',
    image: 'images/cotton--candy.jpeg', 
    title: 'Lecture Xl',
    name: 'Speaker X',
    about: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
    description: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
  },
  {
    icon: 'images/forum.png',
    image: 'images/cotton--candy.jpeg', 
    title: 'Lecture',
    name: 'Speaker X',
    about: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
    description: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
  },
  {
    icon: 'images/stage.png',
    image: 'images/cotton--candy.jpeg',
    title: 'Lecture',
    name: 'Speaker X',
    about: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
    description: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
  },
  {
    icon: 'images/lecture.png',
    image: 'images/cotton--candy.jpeg',
    title: 'Lecture',
    name: 'Speaker X',
    about: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
    description: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
  },
  { icon: 'images/ignite.png',
    title: 'Lecture',
    image: 'images/cotton--candy.jpeg',
    name: 'Speaker X',
    about: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
    description: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
  },
  {
    image: 'images/cotton--candy.jpeg',
    title: 'Lecture',
    name: 'Speaker X',
    about: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
    description: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
  },
];

// Hamburger section

let showMenu = false;

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNNav.classList.add('open');
    // navItems.forEach(item => item.classList.add('open'));

    showMenu = true;

  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNNav.classList.remove('open');
    // navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);

// Sticky Nav

let navbar = document.querySelector('.nav-menu');
let sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}

window.onscroll = function() {stickyNav()};

// Program section

function program() {

  const prgContainer = document.querySelector('.program__activities');

  for (let i = 1; i < 6; i +=1) {
    const item = projectData[i];
    const initData = prgContainer.innerHTML;

    let activityData = `<div id='${item.title}' class='program__event'>
                          <img src='${item.icon}' class='program__icon' alt='${item.title} image' />
                          <h3 id='${item.title}' class='program__topic'>${item.title}</h3>
                          <p id='${item.title}' class='program__desc'>${item.description}</p>
                        </div>${initData}`;
    
    prgContainer.innerHTML = activityData;
  }
}

// Speakers section

function featureSpeakers() {

  const speakersContainer = document.querySelector('.speakers');

  for (let i = 1; i < projectData.length; i +=1) {
    const speaker = projectData[i];
    const fetch = speakersContainer.innerHTML;
  
    speakerData = `<div class='speakers__speaker ${i >= 3 ? 'hide-speaker' : ''}' id='${speaker.name}'>
                    <div class='speakers__img'><img src='${speaker.image}' alt='${speaker.name}'></div>
                    <div class='speakers__description'>
                      <h3 class='speakers__name'>${speaker.name}</h3>
                      <small class='speakers__title'>${speaker.title}</small>
                      <hr class='speakers__hr'>
                      <p class='speakers__about'>${speaker.about}</p>
                    </div>
                </div>${fetch}`;
  speakersContainer.innerHTML = speakerData;
  }
}

window.onload = function() {
  program();
  featureSpeakers();
}

// Show less/more button


// function showMore() {
//   hideSpeaker.style.display = 'flex';
//   less.style.display = 'flex';
//   more.style.display = 'none';
// }

// function showMore() {
//   hideSpeaker.style.display = 'none';
//   less.style.display = 'none';
//   more.style.display = 'flex';
// }

// more.addEventListener('click', showMore);
// less.addEventListener('click', showMore);

// Sponsers section

sponsorers.className = 'sponsorers';
sponsorers.id = 'sponsorers';
brand = projectData[0];

sponsorers.innerHTML = `<h2 class='sponsorers__header'>Sponsorers</h2> 
                          <hr class='sponsorers__line'>
                          <div class='sponsorers__logos'> 
                            <img src='${brand.brand1}' class='sponsorers__logo' alt='${brand.brand1}'>
                            <img src='${brand.brand2}' class='sponsorers__logo' alt='${brand.brand2}'>
                            <img src='${brand.brand3}' class='sponsorers__logo' alt='${brand.brand3}'>
                            <img src='${brand.brand4}' class='sponsorers__logo' alt='${brand.brand4}'>
                            <img src='${brand.brand5}' class='sponsorers__logo' alt='${brand.brand5}'>
                          </div>`;
body.appendChild(sponsorers);

// Footer section
const footer = document.createElement('footer');
footer.innerHTML = `<img src='${brand.copyright}' alt='${brand.copyright}' class='copyright'> 
                    <p class='desc'>2022 Annual Trading Seminar, Twitch Tv. 
                      <br> Some Rights Reserved.
                    </p>`;
body.appendChild(footer);

moreBtn.addEventListener('click', () => {
  if (hideSpeaker.classList.contains('hide-speaker')) {
    hideSpeaker.classList.remove('hide-speaker');
    moreBtn.innerHTML = 'MORE <i class="fa-solid fa-angle-down arrow"></i>';
  } else {
    hideSpeaker.classList.add('hide-speaker');
    moreBtn.innerHTML = 'LESS <i class="fa-solid fa-angle-up arrow"></i>';
  }
});