console.log("Bank app");
var accBalance = 50;
var withdrawCount = 0;
var withdrawCharge = 0;

var inputAmt = document.querySelector(".amt-input");
var depositBtn = document.querySelector(".deposit-btn");
var withdrawBtn = document.querySelector(".withdraw-btn");
var balance = document.querySelector(".acc-balance");
var withdrawFee = document.querySelector(".charge-display");
balance.value = accBalance;
withdrawFee.value = withdrawCharge;

function handleDeposit() {
  if (accBalance >= 0) {
    balance.style.backgroundColor = "lightgreen";
  }
  accBalance = accBalance + Number(inputAmt.value);
  balance.value = accBalance;
}
function checkWithdrawLimit() {
  if (withdrawCount > 10 && withdrawCount < 12) {
    withdrawCharge += 2;
    withdrawFee.value = withdrawCharge;
    withdrawFee.style.backgroundColor = "tomato";
    console.log("Withdraw charge :" + withdrawCharge);
    return alert(
      "Your free withdrawals limit exceeds. There'll be a $2 charge from now on"
    );
  } else if (withdrawCount >= 12) {
    withdrawCharge += 2;
    withdrawFee.style.backgroundColor = "tomato ";
    withdrawFee.value = withdrawCharge;
  }
}
function handleWithdraw() {
  var bal = accBalance - Number(inputAmt.value);
  withdrawCount++;
  if (bal < 0) {
    balance.style.backgroundColor = "red";
    alert("Sorry , There's insufficient balance to make your transaction!");
  } else {
    checkWithdrawLimit();
    accBalance = accBalance - Number(inputAmt.value);
    balance.value = accBalance;
  }
}

depositBtn.addEventListener("click", handleDeposit);
withdrawBtn.addEventListener("click", handleWithdraw);
