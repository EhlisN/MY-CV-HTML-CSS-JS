function createEl(tag, classes, container) {
  let el = document.createElement(tag);
  el.classList.add(classes);
  container.append(el);
  return el;
}

document.querySelector('.btn__cv').addEventListener('click', () => {
  document.querySelector('.cv__download').style.display = 'block';
});

document.querySelector('.cv__close').addEventListener('click', () => {
  document.querySelector('.cv__download').style.display = 'none';
});
