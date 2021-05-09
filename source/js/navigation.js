let menuButtonClosed = document.querySelector('.header__nav-button');
let menuButtonOpened = document.querySelector('.header__nav-button-opened');
let headerNavigation = document.querySelector('.header__nav');
let headerNavItem = document.querySelectorAll('.header__nav-item');

menuButtonClosed.addEventListener('click', function () {
  headerNavigation.classList.toggle('header__nav--opened');
});

menuButtonOpened.addEventListener('click', function () {
  if (headerNavigation.classList.contains('header__nav--opened')) {
    headerNavigation.classList.remove('header__nav--opened');
  }
});

headerNavItem.forEach((item) => {
  item.addEventListener('click', function () {
    if (headerNavigation.classList.contains('header__nav--opened')) {
      headerNavigation.classList.remove('header__nav--opened');
    }
  });
});
