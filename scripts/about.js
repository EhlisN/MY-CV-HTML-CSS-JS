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
  let value = createEl('span', 'value', line);
  value.innerHTML = `${val}%`;
  value.style.left = `${val - 1}%`;
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
