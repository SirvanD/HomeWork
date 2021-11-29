//var accountBalance = document.querySelector(`.balance`)
var depositButton = document.querySelector(`.deposit-btn`)
var withdrawButton = document.querySelector(`.withdraw-btn`)
var balanceDisplay = document.querySelector(`.balanceno`)
var balance = 0
var input = document.querySelector(`.input`)

//savingsNo.textContent = savings



function handleDeposit() {
    balance = balance + Number(input.value)
    balanceDisplay.textContent = balance
}

depositButton.addEventListener(`click`, handleDeposit)

function handleWithdraw() {
   console.log(balance)
   
   if (balance - Number(input.value) >= 0 ) {
       
    balance = balance - Number(input.value)
    balanceDisplay.textContent = balance
   }
}

withdrawButton.addEventListener(`click`,handleWithdraw )

if (balance == 0) {
    balanceDisplay.style.backgroundColor = `mistyrose`
}
if (balance <= 1) {
    balanceDisplay.style.backgroundColor = `none`
}