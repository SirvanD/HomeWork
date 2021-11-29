var accountBalance = document.querySelector('.balance')
var depositBtn = document.querySelector('.deposit-btn')
var withdrawBtn = document.querySelector('.withdraw-btn')
var amount = document.querySelector('.amount')

function balance(){
}

function deposit(){
    accountBalance.textContent = Number(amount.value) + Number(accountBalance.textContent)
}

function withdraw(){
    accountBalance.textContent = Number(accountBalance.textContent) - Number(amount.value)
    accountBalance = Number(accountBalance.value); 
    while (accountBalance == 0) {
       document.querySelector('.withdraw-btn').style.color = mistyrose
    }
}
depositBtn.addEventListener('click', deposit)
withdrawBtn.addEventListener('click', withdraw)


