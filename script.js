//munkar -+

const decreaseButtons = document.querySelectorAll('button[data-operator="minus"]');

const increaseButtons = document.querySelectorAll('button[data-operator="plus"]');

for (let i = 0; i < decreaseButtons.length; i++) {
  decreaseButtons[i].addEventListener('click', decreaseCount);
  increaseButtons[i].addEventListener('click', increaseCount);
}

function increaseCount(e) {
  const amountEl = e.currentTarget.parentElement.querySelector('.amount');

  let amount = Number(amountEl.innerText);
  
  amountEl.innerHTML = amount + 1;

  updateDonutSum(e.currentTarget.parentElement);
}

function decreaseCount(e) {
  const amountEl = e.currentTarget.parentElement.querySelector('.amount');

  let amount = Number(amountEl.innerText); // Eller .innerHTML eller .textContent

  if (amount - 1 < 0) {
    return;
  }

  amountEl.innerHTML = amount - 1;

  updateDonutSum(e.currentTarget.parentElement);
}

function updateDonutSum(donutElement) {
    const donutSinglePrice = donutElement.querySelector('.price').innerHTML;
    const orderedAmount = donutElement.querySelector('.amount').innerHTML;
  
    const sum = donutSinglePrice * orderedAmount;
  
    donutElement.querySelector('.sum').innerHTML = sum ;
    console.log(sum + 'kr');
  }

//kundinfo

const generateButton = document.querySelector('#customerinfo');
const fnameField = document.querySelector('#fname');
const lnameField = document.querySelector('#lname');
const streatField = document.querySelector('#streat');
const postnumberField = document.querySelector('#postnumber');
const stateField = document.querySelector('#state');
const kodeField = document.querySelector('#kode');
const numberField = document.querySelector('#number');
const emailField = document.querySelector('#email');

let fnameIsOk = false;
let lnameIsOk = false;
let streatIsOk = false;
let postnumberIsOk = false;
let stateIsOk = false;
let kodeIsOk = false;
let numberIsOk = false;
let emailIsOk = false;

fnameField.addEventListener('change', checkFname);
lnameField.addEventListener('change', checkLname);
streatField.addEventListener('change', checkStreat);
postnumberField.addEventListener('change', checkPostnumber);
stateField.addEventListener('change', checkState);
kodeField.addEventListener('change', checkKode);
numberField.addEventListener('change', checkNumber);
emailField.addEventListener('change', checkEmail);

//function checkLname() {
//  lnameIsOk = lnameField.value.indexOf(' ') > -1;
//  activateGenerateButton();
//}

//function checkFname() {
//  fnameIsOk = fnameField.value.indexOf(' ') > -1;
//  activateGenerateButton();
//}

function activateGenerateButton() {
  if (fnameIsOk && lnameIsOk && streatIsOk && postnumberIsOk && stateIsOk && kodeIsOk && numberIsOk && emailIsOk) {
    generateButton.removeAttribute('disabled');
    generateButton.addEventListener('click', printPrice);
  } else {
    generateButton.setAttribute('disabled', '');
    generateButton.removeEventListener('click', printPrice);
    priceTextField.textContent = '';
  }
}

function checkName() {
    console.log(fnameField.value);
}

//Betalnings metod

const contentBtn1 = document.querySelector('#card');
const contentBtn2 = document.querySelector('#bill');

contentBtn1.addEventListener('click', showContent1);
contentBtn2.addEventListener('click', showContent2);

function showContent1() {
  document.querySelector('#payment').classList.add('orange');
  document.querySelector('#card').classList.add('visible');
  document.querySelector('#bill').classList.remove('visible');s
}

function showContent2() {
  document.querySelector('#payment').classList.add('yellow');
  document.querySelector('#card').classList.remove('visible');
  document.querySelector('#bill').classList.add('visible');s
}

//beställnings bekräftelse

//filtrering

//specialregler
