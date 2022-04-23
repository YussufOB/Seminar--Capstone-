// const menuBtn = document.querySelector('.nav-menu__btn');
// const hamburger = document.querySelector('.nav-menu__hamburger');
// const nav = document.querySelector('.nav-menu__list-wrapper');
// const menuNNav = document.querySelector('.list');
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
  {
    icon: 'images/ignite.png',
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

// // Hamburger section

// let showMenu = false;

// function toggleMenu() {
//   if (!showMenu) {
//     hamburger.classList.add('open');
//     nav.classList.add('open');
//     menuNNav.classList.add('open');
//     showMenu = true;
//   } else {
//     hamburger.classList.remove('open');
//     nav.classList.remove('open');
//     menuNNav.classList.remove('open');
//     showMenu = false;
//   }
// }

// menuBtn.addEventListener('click', toggleMenu);

// // Sticky Nav

// const navbar = document.querySelector('.nav-menu');
// const sticky = navbar.offsetTop;

// function stickyNav() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// }

// window.onscroll = function () {
//   stickyNav();
// };

// Program section

function program() {
  const prgContainer = document.querySelector('.program__activities');

  for (let i = 1; i < 6; i += 1) {
    const item = projectData[i];
    const initData = prgContainer.innerHTML;

    const activityData = `<div id='${item.title}' class='program__event'>
                          <img src='${item.icon}' class='program__icon' alt='${item.title} image' />
                          <h3 id='${item.title}' class='program__topic'>${item.title}</h3>
                          <p id='${item.title}' class='program__desc'>${item.description}</p>
                        </div>${initData}`;
    prgContainer.innerHTML = activityData;
  }
}

window.onload = program();

// Sponsers section

sponsorers.className = 'sponsorers';
sponsorers.id = 'sponsorers';
const brand = projectData[0];

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

const dataSpeaker = [
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
  {
    icon: 'images/ignite.png',
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

const speakersContainer = document.querySelector('.speakers');
const hideSpeakers = document.createElement('div');
hideSpeakers.classList.add('speakers__hide-speakers');

dataSpeaker.forEach((speaker) => {
  const speakerX = document.createElement('div');
  speakerX.className = 'speakers__speaker';
  speakerX.innerHTML = `<div class="speakers__img"><img src="${speaker.image}" alt="${speaker.name}"></div>
                        <div class="speakers__description">
                          <h3 class="speakers__name">${speaker.name}</h3>
                          <small class="speakers__title">${speaker.title}</small>
                          <hr class="speakers__hr">
                          <p class="speakers__about">${speaker.description}</p>
                        </div>`;
  if (dataSpeaker.indexOf(speaker) >= 2) {
    hideSpeakers.appendChild(speakerX);
  } else {
    speakersContainer.appendChild(speakerX);
  }
});

speakersContainer.appendChild(hideSpeakers);

const showMoreBtn = document.getElementById('more');
const hideDiv = document.querySelector('.speakers__hide-speakers');
showMoreBtn.addEventListener('click', () => {
  if (hideDiv.classList.contains('hide')) {
    hideDiv.classList.remove('hide');
    showMoreBtn.innerHTML = 'MORE <i class="fa-solid fa-angle-down arrow-icon"></i>';
  } else {
    hideDiv.classList.add('hide');
    showMoreBtn.innerHTML = 'LESS <i class="fa-solid fa-angle-up arrow-icon"></i>';
  }
});

// // Footer section
// const footer = document.createElement('footer');
// footer.innerHTML = `<img src='${brand.copyright}' alt='${brand.copyright}' class='copyright'> 
//                     <p class='desc'>2022 Annual Trading Seminar, Twitch Tv. 
//                       <br> Some Rights Reserved.
//                     </p>`;
// body.appendChild(footer);