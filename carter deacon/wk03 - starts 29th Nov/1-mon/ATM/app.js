// Declare common variables

var currentBalance = document.querySelector('.balance');
var depositButton = document.querySelector('#deposit-btn');
var withdrawButton = document.querySelector('#withdraw-btn');
var userAmount = document.querySelector('#user-amount');
var transferComplete = document.querySelector('.transfer-confirm');
var smartTransfer =document.querySelector('.smart-transfer');

// Function for deposits with printing confirmation of deposit and changing color if balance = $0.
function depositMoney() {
    var depositAmount = Number(userAmount.value);
    var currentAmount = Number(currentBalance.textContent);
    var result = depositAmount + currentAmount;
    if (depositAmount > 0) {
        currentBalance.textContent = result.toFixed(2);
        transferComplete.textContent = "Deposit complete."
        currentBalance.style.color = "#388A06";
        document.querySelector('.balance-span').style.color = "#388A06";
    } else {
        transferComplete.textContent = "Please enter a deposit amount."
    }
}

// Function to withdraw funds - A whole lot of else if's for the withdraw to acocunt for the extension whihc adds the $2 fee for over 10 withdrawals. Probably a simpler way to do this but this works...
var clickCount = 0;

function withdrawMoney() {
    var withdrawAmount = Number(userAmount.value);
    var currentAmount = Number(currentBalance.textContent);
    var result = currentAmount - withdrawAmount;
    if (result > 0 && withdrawAmount !== 0 && clickCount < 10) {
        currentBalance.textContent = result.toFixed(2);
        transferComplete.textContent = "Withdrawal complete."
        clickCount++;
        console.log(clickCount);
    } else if (result == 0 && clickCount > 10) {
        currentBalance.textContent = result.toFixed(2);
        currentBalance.style.color = "red";
        document.querySelector('.balance-span').style.color = "red";
        clickCount = clickCount + 1;
        console.log(clickCount);
    } else if (withdrawAmount == 0) {
        transferComplete.textContent = "Please enter a withdrawal amount."
    } else if (clickCount >= 10 && result-2 > 0) {
        currentBalance.textContent = (result - 2).toFixed(2);
        transferComplete.textContent = "Withdrawal complete. You've reached your free withdrawal limit this month. Withdrawals now incur a $2 fee."
        clickCount++;
    } else {
        transferComplete.textContent = "You do not have sufficient funds to complete this withdrawal."
    }
}

depositButton.addEventListener('click', depositMoney);
withdrawButton.addEventListener('click', withdrawMoney);