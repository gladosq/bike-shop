const menuButtonClosed = document.querySelector('.header__nav-button');
const menuButtonOpened = document.querySelector('.header__nav-button-opened');
const headerNavigation = document.querySelector('.header__nav');

menuButtonClosed.addEventListener('click', function() {
	headerNavigation.classList.toggle('header__nav--opened');
})

menuButtonOpened.addEventListener('click', function() {
	if (headerNavigation.classList.contains('header__nav--opened')) {
		headerNavigation.classList.remove('header__nav--opened');
	}
})

function noJsCompatibility () {
	if (headerNavigation.classList.contains('header__nav--nojs')) {
		headerNavigation.classList.remove('header__nav--nojs');
	}
}

noJsCompatibility();

const promoPhoneInput = document.querySelector('.promo__phone-input');
const promoButton = document.querySelector('.promo__button');

const legitSymbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '-'];

promoButton.addEventListener('click', (evt) => {
	evt.preventDefault();

	let inputValue = promoPhoneInput.value.split('');

	for (let i = 0; i < inputValue.length; i++) {
		if (!legitSymbols.includes(inputValue[i])) {
			promoPhoneInput.setCustomValidity('Номер должен содержать только числа');
		} else if (promoPhoneInput.value.length < 9) {
			promoPhoneInput.setCustomValidity('Введено меньше 9 чисел');
		} else {
			promoPhoneInput.setCustomValidity('');
		}
	}

	promoPhoneInput.reportValidity();
})

promoPhoneInput.addEventListener('input', () => {
	promoPhoneInput.setCustomValidity('');
})