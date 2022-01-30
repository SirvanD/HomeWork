// // GA Bank ATM Web App
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


var userInput = document.querySelector('.userInput')
var balance = document.querySelector('.balance')
var value = Number(balance.textContent)
var withdraw = document.querySelector('.withdraw')
var deposit = document.querySelector('.deposit')
var cancelBTN = document.querySelector('.cancel-btn')
var balanceBTN = document.querySelector('.balance-btn')


function depos(money) {
    value += money;
    if (value > 0) {
        balance.style.backgroundColor = 'aliceblue';
    }
    return value;
}
function withdr(money) {
    if (value - money == 0) {
        balance.style.backgroundColor = 'mistyrose';
        value -= money;
        return (value);
    } else if (value - money < 0) {
        balance.style.backgroundColor = 'mistyrose';
        return "Balance not enough";
    } else if (value - money > 0) {
        balance.style.backgroundColor = 'aliceblue';
        value -= money;
        return (value);
    }
}

function showBalanceDeposit() {
    var money = Number(userInput.value);
    final = depos(money);
    balance.textContent = final;
}

function showBalanceWithdraw() {
    var money = Number(userInput.value);
    final = withdr(money);
    balance.textContent = final;
}

function cancel() {
    balance.textContent = "GOODBYE!";
}

function showBalance() {
    var text = value;
    balance.textContent = text;
}

deposit.addEventListener('click', showBalanceDeposit);
withdraw.addEventListener('click', showBalanceWithdraw);
cancelBTN.addEventListener('click', cancel);
balanceBTN.addEventListener('click', showBalance);