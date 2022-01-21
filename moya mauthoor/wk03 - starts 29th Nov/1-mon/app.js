let accountBalance = document.querySelector(".account-balance");
let fundsInput = document.querySelector(".funds-input");
let depositBtn = document.querySelector(".deposit-btn");
let withdrawalBtn = document.querySelector(".withdrawal-btn");
let atmScreen = document.querySelector(".atm-screen");
let transactionFee = document.querySelector(".transaction-fee");


accountBalance.textContent = 20;
let withdrawalCounter = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}


function handleDeposit() {
    let newBalance = add(Number(accountBalance.textContent), Number(fundsInput.value));
    if (newBalance > 0) {
        atmScreen.style.backgroundColor = "#f2f3fe"; 
    }
    accountBalance.textContent = newBalance;
}

function over10Withdrawals() {
    withdrawalCounter++;        
    let newBalance = subtract(Number(accountBalance.textContent), Number(fundsInput.value)) - 2;
    if (newBalance >= 0) {
        if (newBalance === 0) {
            atmScreen.style.backgroundColor = "mistyrose"; 
        }
        accountBalance.textContent = newBalance;
        transactionFee.textContent = `${withdrawalCounter} withdrawals have been made. Transaction of $2 applied.`;
    } else {
        alert("You do not have enough funds for this transaction (including withdrawal fee)!");
        withdrawalCounter--;
    }
}

function handleWithdrawal() {
    if (withdrawalCounter >= 10) {
        over10Withdrawals();        
    } else {
        withdrawalCounter++;
        let newBalance = subtract(Number(accountBalance.textContent), Number(fundsInput.value));
        if (newBalance >= 0) {
            if (newBalance === 0) {
                atmScreen.style.backgroundColor = "mistyrose"; 
            }
            accountBalance.textContent = newBalance;
        } else {
            alert("You do not have enough funds for this transaction!");
        }
    }
}

depositBtn.addEventListener("click", handleDeposit);
withdrawalBtn.addEventListener("click", handleWithdrawal);