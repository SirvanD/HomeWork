

var balance = document.querySelector('.balance');
var input = document.querySelector('input');
var background = document.querySelector('section')


// Deposit
var deposit = document.querySelector('#depositbtn');
function handleDeposit() {
    var depositAmount = Number(input.value);
    var currentAmount = Number(balance.textContent);
    var updateAmount = depositAmount + currentAmount;
    if (depositAmount > 0) {
        balance.textContent = updateAmount;
        background.style.backgroundColor = 'green'
       
    } else {
        alert("Please enter the amount you would like to deposit");
        background.style.backgroundColor = 'grey'
    }
}
deposit.addEventListener('click', handleDeposit);

// Withdraw
var withdraw = document.querySelector('#withdrawbtn');

function handleWithdraw() {
    var withdrawAmount = Number(input.value);
    var currentAmount = Number(balance.textContent);
    var updateAmount = currentAmount - withdrawAmount;
    if (withdrawAmount <= currentAmount) {
        balance.textContent = updateAmount;
        background.style.backgroundColor = 'grey'
    } else if (withdrawAmount > currentAmount) {
        alert('Not enough funds.')
    }
}   
withdraw.addEventListener('click', handleWithdraw);
