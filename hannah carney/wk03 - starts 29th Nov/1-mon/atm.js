var accountBalance = document.querySelector('.balance')
var depositBtn = document.querySelector('.deposit-btn')
var withdrawBtn = document.querySelector('.withdraw-btn')
var amount = document.querySelector('.amount')



function balance(){
    accountBalance.textContent = Number(accountBalance.value); 
    return accountBalance
}

if (accountBalance <= '0') {
amount.style.backgroundColor = 'red' 
} if (accountBalance > '0' ) {
    amount.style.backgroundColor = 'greenyellow'
}

function deposit(){
    accountBalance.textContent = Number(amount.value) + Number(accountBalance.textContent)
}

function withdraw(){
    accountBalance.textContent = accountBalance.textContent - Number(amount.value) 

    // } if (accountBalance - Number(amount.value) >= 0 ) {
    //     accountBalance = accountBalance - Number(amount.value)
    //     accountBalance.textContent = accountBalance
    //    } if (accountBalance >= 1) {
    //     balanceDisplay.style.backgroundColor = ``}

        if (Number(accountBalance.textContent) == 0) {
            accountBalance.style.backgroundColor = `red`
            console.log ('account balance must be over $0.00')
        }
}



depositBtn.addEventListener('click', deposit)
withdrawBtn.addEventListener('click', withdraw)
