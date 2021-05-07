const menuButtonClosed = document.querySelector('.header__nav-button');
const menuButtonOpened = document.querySelector('.header__nav-button-opened');
const headerNavigation = document.querySelector('.header__nav');

menuButtonClosed.addEventListener('click', function () {
  headerNavigation.classList.toggle('header__nav--opened');
});

menuButtonOpened.addEventListener('click', function () {
  if (headerNavigation.classList.contains('header__nav--opened')) {
    headerNavigation.classList.remove('header__nav--opened');
  }
});
