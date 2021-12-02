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
var balance = 50000;
var accountBalance = document.querySelector(".accountBal-btn");
var deposit = document.querySelector(".Deposit-btn");
var withdraw = document.querySelector(".WithDraw-btn");
var userAmount = document.querySelector('user-amount');
 var transaction = document.querySelector(".transaction");


function makeDeposit() {
  var depositMoney = Number(userAmount.value);
  var currentAmount = Number(accountBalance.textContent);
  var result = currentBalance + depositMoney;
  if (deposit > 0) {
    accountBalance.textContent = result
    accountBalance.style.color = "white";   
  } else {
    transaction.textContent = "Please enter deposit amount"
  }
  
 


function makeWithdraw() {
  var withdrawMoney = Number(userAmount.value);
  var currentAmount = Number(accountBalance.textContent);
  var result = accountBalance - withdrawMoney;
  if (result > 0) {
    currentBalance.textContent = result
    transaction.textContent = "transaction complete"
  } else if (result == 0) {
    currentBalance.style.backgroundColor = "mistyrose";
  }else {
   {
    transaction.textContent ="insufficient amount"
  }
}
// if (AccBalance <= 0) {
//   text.content = "Transaction declined";
//   console.log("Transaction declined");
// }



deposit.addEventListener("input", makeDeposit);
withdraw.addEventListener("input", makeWithdraw);

