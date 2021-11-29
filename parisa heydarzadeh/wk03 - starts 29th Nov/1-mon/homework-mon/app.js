// GA Bank ATM Web App

// Summary
// This lab will help you practice JavaScript functions and manipulating the DOM. You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.

// Specification:
// Create an ATM web app for customers of GA bank so they can deposit and withdraw money and see their account balance.

// Keep track of account balance somewhere.
// Add functionality so that a user can deposit money into the bank account.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from the bank account.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be change to a different colour (for example mistyrose).
// When the balance is positive change the background color back to normal.

// spend some time on CSS. use your imagination. make an effort.

console.log("ATM");

var debitBalance = 50000;
var balance = document.querySelector(".accountBal-btn");
var deposit = document.querySelector(".Deposit-btn");
var withdraw = document.querySelector(".WithDraw-btn");

function makeDeposit() {
  AccBalance = Number(deposit.value) + debitBalance;
  balance.textContent = AccBalance;
  console.log("Account balance" == AccBalance);
}

function makeWithdraw() {
  AccBalance = debitBalance - Number(withdraw.value);
  balance.textContent = AccBalance;
  console.log("Account balance" == AccBalance);
}
// if (AccBalance <= 0) {
//   text.content = "Transaction declined";
//   console.log("Transaction declined");
// }

function zeroBalance() {
  if (Number(AccBalance.value) == 0) {
    balance.style.backgroundColor = "mistyrose";
  } else {
    document.balance.style.backgroundColor = "white";
  }
}

deposit.addEventListener("input", makeDeposit);
withdraw.addEventListener("input", makeWithdraw);
balance.addEventListener("click", zeroBalance);
