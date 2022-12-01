
// summa munkar/ filtrering 

const donuts = [
  {
    img: '/style/foto/donut1.png',
    name: 'Donut 1',
    price: 10, 
    amount: 0, 
  },
  {
    img: '/style/foto/donut2.png',
    name: 'Donut 2',
    price: 15,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut3.png',
    name: 'Donut 3',
    price: 15,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut4.png',
    name: 'Donut 4',
    price: 15,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut5.png',
    name: 'Donut 5',
    price: 100,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut6.png',
    name: 'Donut 6',
    price: 200,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut7.png',
    name: 'Donut 7',
    price: 150,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut8.png',
    name: 'Donut 8',
    price: 15,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut9.png',
    name: 'Donut 9',
    price: 500,  
    amount: 0, 
  },
  {
    img: '/style/foto/donut10.png',
    name: 'Donut 10',
    price: 400,  
    amount: 0, 
  },
];

const donutsListing = document.querySelector('#donutsListing');
const priceRangeSlider = document.querySelector('#priceRange');
const currentRangeValue = document.querySelector('#currentRangeValue');

let filteredDonuts = [...donuts];
let filteredDonutsInPriceRange = [...donuts];

function renderDonuts() {
  donutsListing.innerHTML = "";

  for (let i = 0; i < donuts.length; i++) {
      donutsListing.innerHTML += `
      <article class="donut"> 
      <img src="${donuts.img}" alt="" loading="lazy" width="200">
      <h3>${donuts.name}</h3>
      <span class="price">${donuts.price} kr</span>
      Antal <span class="amount">${donuts.amount} st</span><br>
      <span class="sum">0</span>
      <button class="subtract" data-id="${donuts.add}">-</button>
      <button class="add" data-id="${donuts.subtract}">+</button>
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

printOrderedDonuts();
  
document.querySelector('#cartSum').innerHTML = sum;

}

function changePriceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  filteredDonutsInPriceRange = filteredDonuts.filter(donut => donut.price <= currentPrice);
  renderDonuts();
}


function printOrderedDonuts() {
  document.querySelector('#cart').innerHTML = ' ';
  for(let i = 0; i < donuts.length; i++) {
    if (donuts[i].amount > 0) {
      document.querySelector('#cart').innerHTML = `<p>${donuts[i].name}</p>`;
    }
  }
} 

function updateDonutAmount(e) {
  const donutClick = e.currentTarget.dataset.id;
  donuts[donutClick].amount += 1;

  renderDonuts();
}



renderDonuts();

//kundinfo

const generateButton = document.querySelector('#customerinfo');
const fnameField = document.querySelector('#fname');
const lnameField = document.querySelector('#lname');
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

let fnameIsOk = false;
let lnameIsOk = false;
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

fnameField.addEventListener('change', checkFname);
lnameField.addEventListener('change', checkLname);
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
  streatIsOk = streatField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkLname() {
  lnameIsOk = lnameField.value.indexOf(' ') > -1;
  activateGenerateButton();
}

function checkFname() {
  console.log(fnameField.value);
  activateGenerateButton();
}

function activateGenerateButton() {
  if (fnameIsOk && lnameIsOk && streatIsOk && postnumberIsOk && cityIsOk && codeIsOk && numberIsOk && emailIsOk && ssnIsOk && CVCIsOk && cardIsOk && dateIsOk && yearIsOk) {
    generateButton.removeAttribute('disabled');
  
  } else {
    generateButton.setAttribute('disabled', '');
    
  }
}



//Betalnings metod

const contentBtn1 = document.querySelector('#card');
const contentBtn2 = document.querySelector('#invoice');

contentBtn1.addEventListener('click', showContent1);
contentBtn2.addEventListener('click', showContent2);

function showContent1() {
  document.querySelector('#payment').classList.add('orange');
  document.querySelector('#card').classList.add('visible');
  document.querySelector('#invoice').classList.remove('visible');s
}

function showContent2() {
  document.querySelector('#payment').classList.add('yellow');
  document.querySelector('#card').classList.remove('visible');
  document.querySelector('#invoice').classList.add('visible');s
}

//beställnings bekräftelse



//specialregler
