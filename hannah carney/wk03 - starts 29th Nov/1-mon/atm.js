var accountBalance = document.querySelector('.balance')
var depositBtn = document.querySelector('.deposit-btn')
var withdrawBtn = document.querySelector('.withdraw-btn')
var amount = document.querySelector('.amount')



function balance(){
    accountBalance.textContent = Number(accountBalance.value); 
    return accountBalance
}

function deposit(){
    accountBalance.textContent = Number(amount.value) + Number(accountBalance.textContent)
}

function withdraw(){
    accountBalance.textContent = accountBalance.textContent - Number(amount.value)

    if (accountBalance == accountBalance.textContent == 0) {
        amount.style.backgroundColor = 'red'
    } if (accountBalance == accountBalance.textContent < 0) {
        amount.style.backgroundColor = 'greenyellow'
    }
}

depositBtn.addEventListener('click', deposit)
withdrawBtn.addEventListener('click', withdraw)


