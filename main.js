// SECTION - ELEMENTS
const billInput = document.getElementById("bill-js");
const tipsBtn = document.getElementsByTagName("button");
const customTip = document.querySelector(".custom-js");
const numPeopleInput = document.querySelector(".number-people-js");
const resetBtn = document.querySelector(".reset-btn");

const tipAmountText = document.querySelector(".tip-amount");
const totalTipText = document.querySelector(".total-tip");

// VARIABLES
let billValue = 0;
let numberTip = 0;
let customTipValue = 0;
let numberPeopleValue = 1;
let dividedBill = 0;
let calculatedTip = 0;
let total = 0;

// TODO - take the user input
// * bill
billInput.addEventListener("input", function (e) {
  billValue = parseFloat(e.target.value);
  console.log(billValue);
});

// * tip
const btnPressed = (e) => {
  const textBtn = e.target.innerText;
  if (textBtn.length > 2) {
    numberTip = textBtn.slice(0, 2);
  }
  if (textBtn.length <= 2) {
    numberTip = textBtn.slice(0, 1);
  }
  console.log(numberTip);
};

for (let btn of tipsBtn) {
  btn.addEventListener("click", btnPressed);
}

// * custom tip
customTip.addEventListener("input", function (e) {
  customTipValue = Number(e.target.value);
  console.log(customTipValue);
});

// * number of people
numPeopleInput.addEventListener("input", function (e) {
  numberPeopleValue = parseInt(e.target.value);
  console.log(numberPeopleValue);

  calcTipAmountAndTotal(billValue, numberTip, numberPeopleValue);
});

// TODO - calculate the tip
const calcTipAmountAndTotal = function (bill, tip, numPeople) {
  // * validate the user input
  if (
    isNaN(billValue) ||
    billValue <= 0 ||
    isNaN(numberPeopleValue) ||
    numberPeopleValue <= 0
  ) {
    return;
  }

  // * divide the bill by the number of people
  dividedBill = bill / numPeople;
  console.log(dividedBill);

  // * take the percentage of the tip and multiply by the total for each
  calculatedTip = (dividedBill * Number(tip)) / 100;
  console.log(calculatedTip);
  
  // * sum the total for each with the tip
  total = dividedBill + calculatedTip;
  console.log(total);

  // * update UI
  tipAmountText.textContent = `$ ${calculatedTip.toFixed(2)}`;
  totalTipText.textContent = `$ ${total.toFixed(2)}`;
};

// TODO - reset everything
resetBtn.addEventListener("click", function (e) {
  e.preventDefault;

  // * reset the input values
  billInput.value = "0";
  numPeopleInput.value = "0";
  customTip.value = "Custom";

  // * reset results
  tipAmountText.textContent = "$0.00";
  totalTipText.textContent = "$0.00";
});
