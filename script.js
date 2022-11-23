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

fnameField.addEventListener('change', checkName);

function checkName() {
    console.log(fnameField.value);
}