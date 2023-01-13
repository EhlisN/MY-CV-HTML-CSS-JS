const body = document.querySelector('body');
const toggleMainColor = document.querySelector('.mainColor');
const header = document.querySelector('.header');
const btnUp = document.querySelector('.btn__up');

window.onscroll = function () {
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
