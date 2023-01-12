const body = document.querySelector('body');
const toggleMainColor = document.querySelector('.mainColor');
const header = document.querySelector('.header');
const btnUp = document.querySelector('.btn__up');

body.onscroll = function () {
  if (window.pageYOffset > 2) {
    header.classList.add('shadow');
    btnUp.style.display = 'block';
  } else {
    header.classList.remove('shadow');
    btnUp.style.display = 'none';
  }
};

toggleMainColor.addEventListener('click', () => {
  if (toggleMainColor.innerHTML === 'Dark') {
    toggleMainColor.innerHTML = 'Light';
    body.classList.add('dark-mode');
  } else {
    toggleMainColor.innerHTML = 'Dark';
    body.classList.remove('dark-mode');
  }
});

const burgerMenu = document.querySelector('.burger__menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  menu.classList.toggle('open');
});

menu.addEventListener('click', () => {
  burgerMenu.classList.remove('open');
  menu.classList.remove('open');
});

document.querySelector('.btn__cv').addEventListener('click', () => {
  document.querySelector('.cv__download').style.display = 'block';
});

document.querySelector('.cv__close').addEventListener('click', () => {
  document.querySelector('.cv__download').style.display = 'none';
});

function createEl(tag, classes, container) {
  let el = document.createElement(tag);
  el.classList.add(classes);
  container.append(el);
  return el;
}

const skills = {
  JavaScript: 75,
  'HTML & CSS': 85,
  'Git & Github': 80,
  'SASS & LESS': 70,
  'Bootstrap & Material': 90,
  'Figma & Photoshop': 80,
  React: 50,
  Angular: 50,
};

for (let key in skills) {
  createSkill(key, skills[key]);
}

function createSkill(name, val) {
  let bar = createEl(
    'div',
    'progress-bar',
    document.querySelector('.skills__desc')
  );
  let title = createEl('div', 'progress-bar__title', bar);
  title.textContent = name;
  let line = createEl('div', 'progress-bar__line', bar);
  let lineVal = createEl('span', 'line', line);
  lineVal.style.width = `${val}%`;
}

let certificates = document.querySelectorAll('.certificate');

for (let certificate of certificates) {
  certificate.addEventListener('click', () => {
    certificate.classList.toggle('show');
  });
}

let aboutItems = document.querySelectorAll('.about__item');
let aboutItemsBtns = document.querySelectorAll('.about__nav__link');

for (let item of aboutItemsBtns) {
  item.addEventListener('click', (el) => {
    for (let i = 0; i < aboutItemsBtns.length; i++) {
      aboutItemsBtns[i].classList.remove('btn__success');
    }
    for (let i = 0; i < aboutItems.length; i++) {
      if (el.target.classList[0] === aboutItems[i].classList[0]) {
        aboutItems[i].style.display = 'block';
        el.target.classList.add('btn__success');
      } else {
        aboutItems[i].style.display = 'none';
      }
    }
  });
}
