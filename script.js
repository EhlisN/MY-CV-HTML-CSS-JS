const body = document.querySelector('body');
const toggleMainColor = document.querySelector('.mainColor');

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
