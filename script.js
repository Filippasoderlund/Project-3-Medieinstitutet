
// summa munkar/ filtrering 

const donuts = [
  {
    img: '/style/foto/donut1.png',
    name: 'Donut 1',
    price: 40, 
    amount: 0, 
  },
  {
    img: '/style/foto/donut2.png',
    name: 'Donut 2',
    price: 40,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut3.png',
    name: 'Donut 3',
    price: 45,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut4.png',
    name: 'Donut 4',
    price: 55,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut5.png',
    name: 'Donut 5',
    price: 55,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut6.png',
    name: 'Donut 6',
    price: 60,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut7.png',
    name: 'Donut 7',
    price: 70,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut8.png',
    name: 'Donut 8',
    price: 70,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut9.png',
    name: 'Donut 9',
    price: 80,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut10.png',
    name: 'Donut 10',
    price: 90,  
    amount: 0, 
    sortSum: 0,
  },
];

//donutsListing = donutHtmlContainer


const donutHtmlContainer = document.querySelector('#donutsListing');
const priceRangeSlider = document.querySelector('#priceRangeSlider');
const currentRangeValue = document.querySelector('#currentRangeValue');
const clearCartBtn = document.querySelector('#clearCart');
const clearFormBtn = document.querySelector('#clearForm');
const cartHtmlContainer = document.querySelector('#cart');

const today = new Date();
const isFriday = today.getDay() === 5;
const isMonday = today.getDay() === 1;
const currentHours = today.getHours();

let slownessTimer = setTimeout(stupidCustomerMessage, 1000 * 60 * 15);

let filteredDonuts = [...donuts];
let filteredDonutsInPriceRange = [...donuts];

function stupidCustomerMessage() {
  alert('Du är för långsam på att beställa');
}


function getPriceMultiplier() {
  if((isFriday && currentHours >= 15) || (isMonday && currentHours <= 3)) {
    return 1.15;
  }
  return 1;
}



function printDonuts() {
  donutHtmlContainer.innerHTML = "";

  let priceIncrease = 1;


  for (let i = 0; i < donuts.length; i++) {
    donutHtmlContainer.innerHTML += `
      <article class="donut"> 
        <img src="${donuts[i].img}" alt="" loading="lazy" width="200">
        <h3>${donuts[i].name}</h3>
        <span class="price">${donuts[i].price * priceIncrease} kr/st</span><br>
        Antal <span class="amount">${donuts[i].amount} st</span><br>
        <button class="subtract" data-id="${i}">-</button>
        <button class="add" data-id="${i}">+</button>
      </article>
    `;
  }

  document.querySelectorAll('button.add').forEach((btn) => {
    btn.addEventListener('click', updateDonutAmount);
  });
    
  document.querySelectorAll('button.subtract').forEach((btn) => {
    btn.addEventListener('click', decreaseDonutAmount);
  });

  const sum = donuts.reduce(
    (previousValue, donut) => {
      return (donut.amount + donut.price) + previousValue;
    },
    0
  );

  printCartDonuts();
    
  document.querySelector('#cartSum').innerHTML = sum;

}


function updateDonutAmount(e) {
  const donutClick = e.currentTarget.dataset.id;
  donuts[donutClick].amount += 1;

  printDonuts();
}

function decreaseDonutAmount(e) {
  const donutClicked = e.currentTarget.dataset.id;

    if (donuts[donutClicked].amount > 0) {
        donuts[donutClicked].amount -= 1;
    }

    printDonuts();
}


function printCartDonuts() {
  cartHtmlContainer.innerHTML = '';

  let sum = 0;
  let orderedDonutAmount = 0;
  let msg = '';
  let priceIncrease = getPriceMultiplier();


  donuts.forEach(donuts => { 
    orderedDonutAmount += donuts.amount;
      if(donuts.amount > 0) { 
        let donutPrice = donuts.price;
        if(donuts.amount >= 10) {
          donutPrice *= 0.9;
        }
        const adjustedDonutPrice = donuts.price * priceIncrease;

        sum += donuts.amount * adjustedDonutPrice;

        cartHtmlContainer.innerHTML += `
            <article>
                <span>${donuts.name}</span> | <span>${donuts.amount}</span> | <span>${donuts.amount * adjustedDonutPrice} kr</span> 
            </article>
        `;
      }   
  });

  if(sum <= 0) {
    return;
  }

  if(today.getDay() === 1) {
      sum += 0.9;
      msg += '<p>Måndagsrabatt: 10 % på hela köpet';
  }

  cartHtmlContainer.innerHTML += `<p>Total sum: ${sum} kr<p>`;
  cartHtmlContainer.innerHTML += `<div>${msg}</div>`;

  if (orderedDonutAmount > 15) {
    cartHtmlContainer.innerHTML += '<p>Shipping: 0 kr</p>';
  } else {
    cartHtmlContainer.innerHTML += `<p>Shipping: ${Math.round(25 + (0.1 * sum))} kr</p>`;
  }
}

printDonuts();


clearCartBtn.addEventListener('click', clearCart);

function clearCart (e){
  for (let i = 0; i<donuts.length; i++){
    donuts[i].amount = 0;
  }

  printDonuts(donuts); 
}

printDonuts();

//produktfiltrering 

priceRangeSlider.addEventListener("change", showPrice);

function showPrice() {
  currentRangeValue.innerHTML = priceRangeSlider.value + " kr";
  priceRange();
}

function priceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  filteredDonutsInPriceRange = filteredDonuts.filter(donut => donut.price <= currentPrice);
  printDonuts();
}

//kundinfo errorFieldName

const errorNameField = document.querySelector('#errorNameField');


const generateButton = document.querySelector('#customerinfo');
const nameField = document.querySelector('#name');
const streatField = document.querySelector('#streat');
const postnumberField = document.querySelector('#postnumber');
const cityField = document.querySelector('#city');
const codeField = document.querySelector('#code');
const numberField = document.querySelector('#number');
const emailField = document.querySelector('#email');
const ssnField = document.querySelector('#ssn');
const cardField = document.querySelector('#card');
const dateField = document.querySelector('#date');
const yearField = document.querySelector('#year');
const CVCField = document.querySelector('#CVC');

let nameIsOk = false;
let streatIsOk = false;
let postnumberIsOk = false;
let cityIsOk = false;
let codeIsOk = false;
let numberIsOk = false;
let emailIsOk = false;
let ssnIsOk = false;
let cardIsOk = false;
let dateIsOk = false;
let yearIsOk = false;
let CVCIsOk = false;

nameField.addEventListener('change', checkName);
streatField.addEventListener('change', checkStreat);
postnumberField.addEventListener('change', checkPostnumber);
cityField.addEventListener('change', checkcity);
codeField.addEventListener('change', checkcode);
numberField.addEventListener('change', checkNumber);
emailField.addEventListener('change', checkEmail);
ssnField.addEventListener('change', checkSsn);
cardField.addEventListener('change', checkCard);
dateField.addEventListener('change', checkDate);
yearField.addEventListener('change', checkYear);
CVCField.addEventListener('change', checkCVC);



/**
 * function validateInput(fname, errorField) {
  let fname = document.getElementById(fname).value;
  const errorField = document.getElementById(errorField);

  if (fname.length === 0) {
    errorField.innerHTML = '*';
    return false;
  }

  errorField.innerHTML = '';
  return true;
}

validateInput('fname', 'errorField');
 * 
 */

 
function checkCVC() {
  CVCIsOk = CVCField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkYear() {
  yearIsOk = yearField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkDate() {
  dateIsOk = dateField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkCard() {
  cardIsOk = cardField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkSsn() {
  ssnIsOk = ssnField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkEmail() {
  emailIsOk = emailField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkNumber() {
  numberIsOk = numberField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkcode() {
  codeIsOk = codeField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkcity() {
  cityIsOk = cityField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkPostnumber() {
  postnumberIsOk = postnumberField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkStreat() {
  if (streatField.value.indexOf(' ') > -1) { 
    streatIsOk = true;
    
  } else {
    streatIsOk = false;
    
  }
  activateGenerateButton();
}

function checkName() {
  if (nameField.value.indexOf(' ') > -1) { 
    nameIsOk = true;
    
    
  } else {
    nameIsOk = false;
    errorNameField.removeAttribute('hidden', '');
  }
  activateGenerateButton();
}

function activateGenerateButton() {
  if(nameIsOk && streatIsOk && postnumberIsOk && cityIsOk && codeIsOk && numberIsOk && emailIsOk && ssnIsOk && CVCIsOk && cardIsOk && dateIsOk && yearIsOk) {
    generateButton.removeAttribute('disabled');
  } else {
    generateButton.setAttribute('disabled', '');
  }
}


clearFormBtn.addEventListener('click', clearForm);

function clearForm (e){
  for (let i = 0; i<donuts.length; i++){
    donuts[i].amount = 0;
  }

  printDonuts(donuts); 
}

//Betalnings metod

const contentBtn1 = document.querySelector('#card');
const contentBtn2 = document.querySelector('#invoice');

contentBtn1.addEventListener('click', showContent1);
contentBtn2.addEventListener('click', showContent2);

function showContent1() {
  document.querySelector('#payment').classList.add('orange');
  document.querySelector('#card').classList.add('visible');
  document.querySelector('#invoice').classList.remove('visible');
}

function showContent2() {
  document.querySelector('#payment').classList.add('yellow');
  document.querySelector('#card').classList.remove('visible');
  document.querySelector('#invoice').classList.add('visible');
}

//beställnings bekräftelse
