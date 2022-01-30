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
    if (Number(accountBalance.textContent) > '0' ) {
        accountBalance.style.backgroundColor = 'black'
    } 
}


function withdraw(){
    if (accountBalance.textContent - Number(amount.value) < '0') {
        accountBalance.style.backgroundColor = `red`
    } 
    else {
        accountBalance.style.backgroundColor = 'black'
        accountBalance.textContent = accountBalance.textContent - Number(amount.value)  
    }
}

depositBtn.addEventListener('click', deposit)
withdrawBtn.addEventListener('click', withdraw)
