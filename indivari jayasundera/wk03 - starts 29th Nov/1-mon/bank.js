console.log("Bank app");
var accBalance = 50;

var inputAmt = document.querySelector(".amt-input");
var depositBtn = document.querySelector(".deposit-btn");
var withdrawBtn = document.querySelector(".withdraw-btn");
var balance = document.querySelector(".acc-balance");
balance.value = accBalance;

function handleDeposit() {
  if (accBalance >= 0) {
    balance.style.backgroundColor = "lightgreen";
  }
  accBalance = accBalance + Number(inputAmt.value);
  balance.value = accBalance;
}

function handleWithdraw() {
  var bal = accBalance - Number(inputAmt.value);
  if (bal < 0) {
    balance.style.backgroundColor = "red";
    alert("Sorry , There's insufficient balance to make your transaction!");
  } else {
    accBalance = accBalance - Number(inputAmt.value);
    balance.value = accBalance;
  }
}

depositBtn.addEventListener("click", handleDeposit);
withdrawBtn.addEventListener("click", handleWithdraw);
