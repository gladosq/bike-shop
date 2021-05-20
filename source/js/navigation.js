let menuButtonClosed = document.querySelector('.header__nav-button');
let menuButtonOpened = document.querySelector('.header__nav-button-opened');
let headerNavigation = document.querySelector('.header__nav');
let headerNavItem = document.querySelectorAll('.header__nav-item');

menuButtonClosed.addEventListener('click', function () {
  headerNavigation.classList.toggle('header__nav--opened');
  document.body.classList.toggle('no-scroll');
});

menuButtonOpened.addEventListener('click', function () {
  if (headerNavigation.classList.contains('header__nav--opened')) {
    headerNavigation.classList.remove('header__nav--opened');
  }
  if (document.body.classList.contains('no-scroll')) {
    document.body.classList.remove('no-scroll');
  }
});

headerNavItem.forEach((item) => {
  item.addEventListener('click', function () {
    if (headerNavigation.classList.contains('header__nav--opened')) {
      headerNavigation.classList.remove('header__nav--opened');
    }
    if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
    }
  });
});

window.addEventListener('resize', () => {
  if (headerNavigation.classList.contains('header__nav--opened')) {
    headerNavigation.classList.remove('header__nav--opened');
  }
  if (document.body.classList.contains('no-scroll')) {
    document.body.classList.remove('no-scroll');
  }
});
