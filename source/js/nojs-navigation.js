let headerNavigation = document.querySelector('.header__nav');

function noJsCompatibility() {
  if (headerNavigation.classList.contains('header__nav--nojs')) {
    headerNavigation.classList.remove('header__nav--nojs');
  }
}

noJsCompatibility();
