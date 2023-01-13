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
