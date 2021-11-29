var accountBalance = document.querySelector('.balance')
var depositBtn = document.querySelector('.deposit-btn')
var withdrawBtn = document.querySelector('.withdraw-btn')
var amount = document.querySelector('.amount')


function balance(){
accountBalance = Number(accountBalance.value)
}

function deposit(){
    accountBalance.textContent = Number(amount.value) + Number(accountBalance.textContent)
}

function withdraw(){
    accountBalance.textContent = Number(accountBalance.textContent) - Number(amount.value)
}

depositBtn.addEventListener('click', deposit)
withdrawBtn.addEventListener('click', withdraw)