"use strict";

var menuButtonClosed = document.querySelector('.header__nav-button');
var menuButtonOpened = document.querySelector('.header__nav-button-opened');
var headerNavigation = document.querySelector('.header__nav');
var headerNavItem = document.querySelectorAll('.header__nav-item');
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
headerNavItem.forEach(function (item) {
  item.addEventListener('click', function () {
    if (headerNavigation.classList.contains('header__nav--opened')) {
      headerNavigation.classList.remove('header__nav--opened');
    }

    if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
    }
  });
});
window.addEventListener('resize', function () {
  if (headerNavigation.classList.contains('header__nav--opened')) {
    headerNavigation.classList.remove('header__nav--opened');
  }

  if (document.body.classList.contains('no-scroll')) {
    document.body.classList.remove('no-scroll');
  }
});
"use strict";

var headerNavigation = document.querySelector('.header__nav');

function noJsCompatibility() {
  if (headerNavigation.classList.contains('header__nav--nojs')) {
    headerNavigation.classList.remove('header__nav--nojs');
  }
}

noJsCompatibility();
"use strict";

var LEGIT_SYMBOLS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '-'];
var promoPhoneInput = document.querySelector('.promo__phone-input');
var promoNameInput = document.querySelector('.promo__name-input');
var promoButton = document.querySelector('.promo__button');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(promoPhoneInput, maskOptions);
promoButton.addEventListener('click', function (evt) {
  if (promoPhoneInput.value.length === 0) {
    evt.preventDefault();
    promoPhoneInput.setCustomValidity('Введите номер телефона');
  } else {
    promoPhoneInput.setCustomValidity('');
  }

  var inputValue = promoPhoneInput.value.split('');

  for (var i = 0; i < inputValue.length; i++) {
    if (!LEGIT_SYMBOLS.includes(inputValue[i])) {
      promoPhoneInput.setCustomValidity('Номер должен содержать только числа');
    } else if (promoPhoneInput.value.length < 9) {
      promoPhoneInput.setCustomValidity('Введено меньше 9 чисел');
    } else {
      promoPhoneInput.setCustomValidity('');
    }
  }

  promoPhoneInput.reportValidity();
  localStorage.setItem('name', promoNameInput.value);
  localStorage.setItem('phone', promoPhoneInput.value);
});
promoPhoneInput.addEventListener('input', function () {
  promoPhoneInput.setCustomValidity('');
});