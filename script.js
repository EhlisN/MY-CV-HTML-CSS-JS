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

window.addEventListener('scroll', showVisible);
showVisible();

let menuItems = document.querySelectorAll('.menu__item__link');

function showVisible() {
  for (let section of document.querySelectorAll('section')) {
    if (isVisible(section)) {
      let menuItems = document.querySelectorAll('.menu__item__link');
      for (let item of menuItems) {
        if (item.href.split('#')[1] === section.classList[0]) {
          item.classList.add('focus');
        } else {
          item.classList.remove('focus');
        }
      }
    }
  }
}

function isVisible(el) {
  let coords = el.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top >= 0 && coords.top < windowHeight - 300;
  return topVisible;
}

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

const portfolio = [
  {
    title: 'HTML & CSS',
    images: [
      './assets/images/bootstrap1.png',
      './assets/images/bootstrap2.png',
      './assets/images/bootstrap3.png',
    ],
    name: 'Bootstrap',
    deploy: 'https://ehlisn.github.io/bootstrap-ad-s-board/',
    link: 'https://github.com/EhlisN/bootstrap-ad-s-board',
    desc: 'Website built with Bootstrap 5 Framework',
  },
  {
    title: 'HTML & CSS',
    images: [
      './assets/images/responsive1.png',
      './assets/images/responsive2.png',
    ],
    name: 'Responsive',
    deploy: 'https://ehlisn.github.io/company-html-css/',
    link: 'https://github.com/EhlisN/company-html-css',
    desc: 'Responsive website using flex and media queries.',
  },
  {
    title: 'HTML & CSS',
    images: [
      './assets/images/mogo1.png',
      './assets/images/mogo2.png',
      './assets/images/mogo3.png',
      './assets/images/mogo4.png',
      './assets/images/mogo5.png',
    ],
    name: 'MoGo',
    deploy: 'https://ehlisn.github.io/MoGo-html-css/',
    link: 'https://github.com/EhlisN/MoGo-html-css',
    desc: 'Landing Page. Build with HTML & CSS.',
  },
  {
    title: 'JavaScript',
    images: [
      './assets/images/gamesJS1.png',
      './assets/images/gamesJS2.png',
      './assets/images/gamesJS3.png',
      './assets/images/gamesJS4.png',
      './assets/images/gamesJS5.png',
    ],
    name: 'Games',
    deploy: 'https://ehlisn.github.io/Games-JS/',
    link: 'https://github.com/EhlisN/Games-JS',
    desc: 'A small collection of simple JavaScript games: "Car", "Tic-tac-toe", "Cards", "15 Puzzle"',
  },
  {
    title: 'React',
    images: [
      './assets/images/brain-games1.png',
      './assets/images/brain-games2.png',
      './assets/images/brain-games3.png',
    ],
    name: 'Brain-games',
    deploy: 'https://ehlisn.github.io/brain-games-react/',
    link: 'https://github.com/EhlisN/brain-games-react',
    desc: 'Match The Tiles - make your brain work! Web application for various games and exercises for brain training. React, SPA, TypeScript.',
  },
  {
    title: 'React',
    images: ['./assets/images/products1.png', './assets/images/products2.png'],
    name: 'Products',
    deploy: 'https://ehlisn.github.io/Products-React/',
    link: 'https://github.com/EhlisN/Products-React/tree/main/Exam',
    desc: 'Simple React.TS Products listing using dummyjson.',
  },
  {
    title: 'Angular',
    images: ['./assets/images/weather1.png', './assets/images/weather2.png'],
    name: 'Weather',
    deploy: 'https://ehlisn.github.io/weather-angular/',
    link: 'https://github.com/EhlisN/weather-angular',
    desc: 'Weather app is the little web app for displaying the weather report from openweathermap.org using Components, Databinding, HTTP, Services, Observables, HTML5, CSS3 and more!',
  },
  {
    title: 'Angular',
    images: [
      './assets/images/movie1.png',
      './assets/images/movie2.png',
      './assets/images/movie3.png',
    ],
    name: 'Films',
    deploy: 'https://ehlisn.github.io/film-search-angular/',
    link: 'https://github.com/EhlisN/film-search-angular',
    desc: 'Application queries the OMDb API in order to retrieve information about requested movies. Pagination was implemented in order to display bigger search results. Application does not fully support responsive design but most of the components are built upon flex layouts and CSS grids so to make it fully usable on smaller devices.',
  },
];

let portfolioItems = document.querySelector('.portfolio__show');
let btnAll = document.querySelector('.btn__all');
let btnHtml = document.querySelector('.btn__html');
let btnJs = document.querySelector('.btn__js');
let btnReact = document.querySelector('.btn__react');
let btnAngular = document.querySelector('.btn__angular');
let filterBar = document.querySelector('.filter__bar span');
let showMore = document.querySelector('.btn__add');

function showPortfolio(param) {
  showMore.style.display = 'none';
  let count = 1;
  if (param === 'all') {
    for (let i = 0; i < portfolio.length; i++) {
      let el = createPortfolioItem(portfolio[i]);
      if (count === 1) {
        el.classList.add('portfolio__item__big');
        el.classList.add('show');
        count++;
      } else if (count <= 3) {
        el.classList.add('show');
        count++;
      } else {
        showMore.style.display = 'flex';
        count++;
      }
    }
  } else {
    for (let i = 0; i < portfolio.length; i++) {
      if (portfolio[i].title == param) {
        let el = createPortfolioItem(portfolio[i]);
        if (count === 1) {
          el.classList.add('portfolio__item__big');
          el.classList.add('show');
          count++;
        } else if (count <= 3) {
          el.classList.add('show');
          count++;
        } else {
          showMore.style.display = 'flex';
          count++;
        }
      }
    }
  }
}

showMore.addEventListener('click', () => {
  for (let el of document.querySelectorAll('.portfolio__item')) {
    el.classList.add('show');
    showMore.style.display = 'none';
  }
});

showPortfolio('all');

btnAll.addEventListener('click', () => {
  portfolioItems.innerHTML = '';
  showPortfolio('all');
  filterBar.style.width = '40px';
  filterBar.style.left = '0px';
});
btnHtml.addEventListener('click', () => {
  portfolioItems.innerHTML = '';
  showPortfolio('HTML & CSS');
  filterBar.style.width = '85px';
  filterBar.style.left = '40px';
});
btnJs.addEventListener('click', () => {
  portfolioItems.innerHTML = '';
  showPortfolio('JavaScript');
  filterBar.style.width = '30px';
  filterBar.style.left = '125px';
});
btnReact.addEventListener('click', () => {
  portfolioItems.innerHTML = '';
  showPortfolio('React');
  filterBar.style.width = '55px';
  filterBar.style.left = '150px';
});
btnAngular.addEventListener('click', () => {
  portfolioItems.innerHTML = '';
  showPortfolio('Angular');
  filterBar.style.width = '80px';
  filterBar.style.left = '205px';
});

function createPortfolioItem(obj) {
  let portfolioItem = createEl('div', 'portfolio__item', portfolioItems);
  portfolioItem.classList.add('shadow');
  portfolioItem.style.backgroundImage = `url(${obj.images[0]})`;
  let blur = createEl('div', 'blur', portfolioItem);
  let portfolioDesc = createEl('div', 'portfolio__desc', portfolioItem);
  let name = createEl('h4', 'portfolio__name', portfolioDesc);
  name.textContent = obj.name;
  let title = createEl('p', 'portfolio__title', portfolioDesc);
  title.textContent = obj.title;
  let btns = createEl('div', 'portfolio__btns', portfolioDesc);
  let btnZoom = createEl('div', 'btn-zoom', btns);
  btnZoom.classList.add('btn');
  let btnDeploy = createEl('a', 'btn-deploy', btns);
  btnDeploy.classList.add('btn');
  btnDeploy.target = '_blank';
  btnDeploy.href = obj.deploy;
  let btnLink = createEl('a', 'btn-link', btns);
  btnLink.classList.add('btn');
  btnLink.href = obj.link;
  btnLink.target = '_blank';

  let zoom = createEl('div', 'zoom', portfolioItem);
  let btnRight = createEl('div', 'btn__right', zoom);
  btnRight.textContent = '>';
  let btnLeft = createEl('div', 'btn__left', zoom);
  btnLeft.textContent = '<';
  let imgs = createEl('div', 'zoom__imgs', zoom);
  let btnClose = createEl('div', 'btn__close', zoom);
  btnClose.textContent = 'X';

  let imgArr = [];

  for (let i = 0; i < obj.images.length; i++) {
    let img = createEl('img', 'zoom__img', imgs);
    img.src = obj.images[i];
    img.alt = obj.name;
    if (i === 0) img.classList.add('img__show');
    imgArr.push(img);
  }

  let count = 0;
  btnRight.addEventListener('click', () => {
    imgArr[count].classList.remove('img__show');
    if (count < imgArr.length - 1) {
      count++;
      imgArr[count].classList.add('img__show');
    } else {
      count = 0;
      imgArr[count].classList.add('img__show');
    }
  });
  btnLeft.addEventListener('click', () => {
    imgArr[count].classList.remove('img__show');
    if (count > 0) {
      count--;
      imgArr[count].classList.add('img__show');
    } else {
      count = imgArr.length - 1;
      imgArr[count].classList.add('img__show');
    }
  });

  let desc = createEl('div', 'zoom__desc', zoom);
  desc.textContent = obj.desc;

  btnZoom.addEventListener('click', () => {
    zoom.style.display = 'block';
  });

  btnClose.addEventListener('click', () => {
    zoom.style.display = 'none';
  });

  return portfolioItem;
}
