// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.


var balance = document.querySelector('.balance');
var deposit = document.querySelector('.deposit');
var withdrawal = document.querySelector('.withdrawal');
var amount = document.querySelector('.amount');




function depositMoney() {
    var newBalance = Number(balance.textContent) + Number(amount.value);
    balance.textContent = newBalance;
    if (newBalance > 0) {
        balance.style.backgroundColor = "lightblue";
    }
}

function withdrawMoney() {
    if ((amount.value - balance.textContent) < 1) {
        var newBalance = Number(balance.textContent) - Number(amount.value);
        balance.textContent = newBalance;
        if (newBalance <= 0) {
            balance.style.backgroundColor = "red"
        }
    }
}


deposit.addEventListener('click', depositMoney);
withdrawal.addEventListener('click', withdrawMoney);