const LEGIT_SYMBOLS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '-'];

let promoPhoneInput = document.querySelector('.promo__phone-input');
let promoButton = document.querySelector('.promo__button');

let maskOptions = {
  mask: '+{7}(000)000-00-00'
};

let mask = IMask(promoPhoneInput, maskOptions);

promoButton.addEventListener('click', (evt) => {
  evt.preventDefault();

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
});

promoPhoneInput.addEventListener('input', () => {
  promoPhoneInput.setCustomValidity('');
});
