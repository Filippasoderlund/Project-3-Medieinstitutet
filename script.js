// munkar

const donuts = [
  {
    img: "/style/foto/donut1.png",
    name: "Donut 1",
    price: 40,
    amount: 0,
  },
  {
    img: "/style/foto/donut2.png",
    name: "Donut 2",
    price: 40,
    amount: 0,
  },
  {
    img: "/style/foto/donut3.png",
    name: "Donut 3",
    price: 45,
    amount: 0,
  },
  {
    img: "/style/foto/donut4.png",
    name: "Donut 4",
    price: 55,
    amount: 0,
  },
  {
    img: "/style/foto/donut5.png",
    name: "Donut 5",
    price: 55,
    amount: 0,
  },
  {
    img: "/style/foto/donut6.png",
    name: "Donut 6",
    price: 60,
    amount: 0,
  },
  {
    img: "/style/foto/donut7.png",
    name: "Donut 7",
    price: 70,
    amount: 0,
  },
  {
    img: "/style/foto/donut8.png",
    name: "Donut 8",
    price: 70,
    amount: 0,
  },
  {
    img: "/style/foto/donut9.png",
    name: "Donut 9",
    price: 80,
    amount: 0,
  },
  {
    img: "/style/foto/donut10.png",
    name: "Donut 10",
    price: 90,
    amount: 0,
    sortSum: 0,
  }
];

const donutHtmlContainer = document.querySelector("#donutsListing");
const priceRangeSlider = document.querySelector("#priceRangeSlider");
const currentRangeValue = document.querySelector("#currentRangeValue");
const clearCartBtn = document.querySelector("#clearCart");
const clearFormBtn = document.querySelector("#clearForm");
const cartHtmlContainer = document.querySelector("#cart");


const today = new Date();
const isFriday = today.getDay() === 5;
const isMonday = today.getDay() === 1;
const currentHours = today.getHours();

let slownessTimer = setTimeout(stupidCustomerMessage, 1000 * 60 * 15);

let filteredDonuts = [...donuts];
let filteredDonutsInPriceRange = [...donuts];

//timer

function stupidCustomerMessage() {
  alert("Du är för långsam på att beställa");
}

function getPriceMultiplier() {
  if ((isFriday && currentHours >= 15) || (isMonday && currentHours <= 3)) {
    return 1.15;
  }
  return 1;
}

//utskrift av munkar 

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

  document.querySelectorAll("button.add").forEach((btn) => {
    btn.addEventListener("click", updateDonutAmount);
  });

  document.querySelectorAll("button.subtract").forEach((btn) => {
    btn.addEventListener("click", decreaseDonutAmount);
  });

  const sum = donuts.reduce((previousValue, donut) => {
    return donut.amount + donut.price + previousValue;
  }, 0);

  printCartDonuts();

  document.querySelector("#cartSum").innerHTML = sum;
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

//specialregler och varukorgsöversikt

function printCartDonuts() {
  cartHtmlContainer.innerHTML = "";

  let sum = 0;
  let orderedDonutAmount = 0;
  let msg = "";
  let priceIncrease = getPriceMultiplier();

  donuts.forEach((donuts) => {
    orderedDonutAmount += donuts.amount;
    if (donuts.amount > 0) {
      let donutPrice = donuts.price;
      if (donuts.amount >= 10) {
        donutPrice *= 0.9;
      }
      const adjustedDonutPrice = donuts.price * priceIncrease;

      sum += donuts.amount * adjustedDonutPrice;

      cartHtmlContainer.innerHTML += `
            <article>
                <span>${donuts.name}</span> | <span>${
        donuts.amount
      }</span> | <span>${donuts.amount * adjustedDonutPrice} kr</span> 
            </article>
        `;
    }
  });

  if (sum <= 0) {
    return;
  }

  if (today.getDay() === 1) {
    sum += 0.9;
    msg += "<p>Måndagsrabatt: 10 % på hela köpet";
  }

  if (donuts.count >= 10 && donuts.discount === false) {
    donuts.totPrice = Math.round(donuts.totPrice * 0.9);
    donuts.discount = true;
  } else if (donuts.count < 10 && donuts.discount === true) {
    donuts.discount = false;
  }


  cartHtmlContainer.innerHTML += `<p>Total sum: ${sum} kr<p>`;
  cartHtmlContainer.innerHTML += `<div>${msg}</div>`;

  if (orderedDonutAmount > 15) {
    cartHtmlContainer.innerHTML += "<p>Shipping: 0 kr</p>";
  } else {
    cartHtmlContainer.innerHTML += `<p>Shipping: ${Math.round(
      25 + 0.1 * sum
    )} kr</p>`;
  }
}



printDonuts();
//knapp för att ränsa varukorg

clearCartBtn.addEventListener("click", clearCart);

function clearCart(e) {
  for (let i = 0; i < donuts.length; i++) {
    donuts[i].amount = 0;
  }

  printDonuts(donuts);
}

printDonuts();

//produktfiltrering (får ej till det med rätt array )

priceRangeSlider.addEventListener("change", showPrice);

function showPrice() {
  currentRangeValue.innerHTML = priceRangeSlider.value + " kr";
  priceRange();
}

function priceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  filteredDonutsInPriceRange = filteredDonuts.filter(
    (donut) => donut.price <= currentPrice
  );
  printDonuts();
}

// kundinfo (validering av formuläret, superbasic)

const errorNameField = document.querySelector("#errorNameField");

const generateButton = document.querySelector("#order");
const nameField = document.querySelector("#name");
const streatField = document.querySelector("#streat");
const postnumberField = document.querySelector("#postnumber");
const cityField = document.querySelector("#city");
const numberField = document.querySelector("#number");
const emailField = document.querySelector("#email");



let nameIsOk = false;
let streatIsOk = false;
let postnumberIsOk = false;
let cityIsOk = false;
let numberIsOk = false;
let emailIsOk = false;



nameField.addEventListener("change", checkName);
streatField.addEventListener("change", checkStreat);
postnumberField.addEventListener("change", checkPostnumber);
cityField.addEventListener("change", checkcity);
numberField.addEventListener("change", checkNumber);
emailField.addEventListener("change", checkEmail);




function checkEmail() {
  if(emailField.value.indexOf('@') > -1) {
    emailIsOk = true;  
  } else {
    emailIsOk = false;
  }
  console.log('tf', emailIsOk);
  activateGenerateButton();
}

function checkNumber() {
  if (numberField.value >= 0) {
    numberIsOk = true;
  } else {
    numberIsOk = false;
  }
  console.log('tf', numberIsOk);
  activateGenerateButton();
}

function checkcity() {
  if(cityField.value.indexOf('') > -1) {
    cityIsOk = true;  
  } else {
    cityIsOk = false;
  }
  console.log('tf', cityIsOk);
  activateGenerateButton();
  
}

function checkPostnumber() {
  if (postnumberField.value.indexOf('') > -1) {
    postnumberIsOk = true;
  } else {
    postNumberIsOk = false;
  }
  console.log('tf', postnumberIsOk);
  activateGenerateButton();
}

function checkStreat() {
  if (streatField.value.indexOf('') > -1) {
    streatIsOk = true;
  } else {
    streatIsOk = false;
  }
  console.log('tf', streatIsOk);
  activateGenerateButton();
}

function checkName() {
  if(nameField.value.indexOf(' ') > -1) {
    nameIsOk = true;  
  } else {
    nameIsOk = false;
  }
  console.log('tf', nameIsOk);
  activateGenerateButton();
}

function activateGenerateButton() {
  if (nameIsOk &&
    streatIsOk &&
    postnumberIsOk &&
    cityIsOk &&
    numberIsOk &&
    emailIsOk) {
    generateButton.removeAttribute("disabled"); 
  } else {
    generateButton.setAttribute('disabled', ' ');
  }
}

clearFormBtn.addEventListener("click", clearForm);

function clearForm(e) {
  for (let i = 0; i < donuts.length; i++) {
    donuts[i].amount = 0;
  }

  printDonuts(donuts);
}

//Betalnings metod och beställningsbekräftelse 


const contentBtn1 = document.querySelector("#card");
const contentBtn2 = document.querySelector("#invoice");
const contentBtn3 = document.querySelector("#order");

contentBtn1.addEventListener("click", showContent1);
contentBtn2.addEventListener("click", showContent2);
contentBtn3.addEventListener("click", showContent3);

function showContent1() {
  document.querySelector("#cardpay").classList.remove("display-none");
  document.querySelector("#invoicepay").classList.add("display-none");
}

function showContent2() {
  document.querySelector("#invoicepay").classList.remove("display-none");
  document.querySelector("#cardpay").classList.add("display-none");
}

function showContent3() {
  document.querySelector("#confirmation").classList.remove("display-none");
}

