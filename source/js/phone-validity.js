const LEGIT_SYMBOLS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '-'];

let promoPhoneInput = document.querySelector('.promo__phone-input');
let promoNameInput = document.querySelector('.promo__name-input');
let promoButton = document.querySelector('.promo__button');

let maskOptions = {
  mask: '+{7}(000)000-00-00'
};

let mask = IMask(promoPhoneInput, maskOptions);

promoButton.addEventListener('click', (evt) => {
  if (promoPhoneInput.value.length === 0) {
    evt.preventDefault();
    promoPhoneInput.setCustomValidity('Введите номер телефона');
  } else {
    promoPhoneInput.setCustomValidity('');
  }

  let inputValue = promoPhoneInput.value.split('');

  for (let i = 0; i < inputValue.length; i++) {
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

promoPhoneInput.addEventListener('input', () => {
  promoPhoneInput.setCustomValidity('');
});
