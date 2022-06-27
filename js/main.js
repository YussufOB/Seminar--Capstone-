const projectData = [
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
    icon: 'images/workshop.png',
    image: 'images/cotton--candy.jpeg',
    title: 'Lecture',
    name: 'Speaker X',
    about: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
    description: 'Have a chance to learn directly from Cotton (content rich without being scripted) the science of reverse engineering.',
  },
];

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
    icon: 'images/ignite.png',
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