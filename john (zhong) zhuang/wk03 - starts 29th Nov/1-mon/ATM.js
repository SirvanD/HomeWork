// GA Bank ATM Web App
// Summary
// This lab will help you practice JavaScript functions and manipulating the DOM. You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.

// Specification:
// Create an ATM web app for customers of GA bank so they can deposit and withdraw money and see their account balance.

// Keep track of account balance somewhere
// Add functionality so that a user can deposit money into the bank account.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from the bank account.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be change to a different colour (for example mistyrose).
// When the balance is positive change the background color back to normal.
// spend some time on CSS. use your imagination. make an effort.
// optional extension
// Your savings account include 10 free withdrawals. If a user tries to withdraw more than 10 times charge a $2 withdrawal fee for every withdrawal there after.

let balanceNum = document.querySelector('.balance');
let deposit = document.querySelector('.deposit-screen');
let withdraw = document.querySelector('.withdraw-screen');
let depBtn = document.querySelector('.deposit-button');
let withBtn = document.querySelector('.withdraw-button');
let countDown = document.querySelector('.count-down');

balanceNum.textContent = Number(Math.round(Math.random() * 10001));

function depositMoney() {
    balanceNum.textContent = Number(balanceNum.textContent) + Number(deposit.value);
    document.querySelector('.container').style.backgroundColor = "bisque";
}
// deposit.addEventListener('input', depositMoney)
depBtn.addEventListener('click', depositMoney);

function withdrawMoney() {
    balanceNum.textContent = Number(balanceNum.textContent) - Number(withdraw.value)
    if (Number(balanceNum.textContent) <= 0) {
        document.querySelector('.container').style.backgroundColor = "yellow";
        document.querySelector('.balance').textContent = 0;
        alert('Insufficient Funds!');
        return false;
    }

}
// withdraw.addEventListener('input', withdrawMoney);
withBtn.addEventListener('click', withdrawMoney);

function freeWithdraw() {
    let i = 0;
    document.querySelector('.withBtn')
}
