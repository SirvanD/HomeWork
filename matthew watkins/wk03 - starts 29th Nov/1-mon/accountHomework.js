//var accountBalance = document.querySelector(`.balance`)
var depositButton = document.querySelector(`.deposit-btn`)
var withdrawButton = document.querySelector(`.withdraw-btn`)
var balanceDisplay = document.querySelector(`.balanceno`)
var balance = Number(balanceDisplay.textContent)
var input = document.querySelector(`.input`)

//savingsNo.textContent = savings


function handleDeposit() {
    balance = balance + Number(input.value)
    balanceDisplay.textContent = balance
    if (balance >= 1) {
        balanceDisplay.style.backgroundColor = ``}
}

depositButton.addEventListener(`click`, handleDeposit)

function handleWithdraw() {
   console.log(balance)
   
   if (balance - Number(input.value) >= 0 ) {
       
    balance = balance - Number(input.value)
    balanceDisplay.textContent = balance
   }
   if (balance >= 1) {
    balanceDisplay.style.backgroundColor = ``}
    if (Number(balanceDisplay.textContent) == 0) {
        balanceDisplay.style.backgroundColor = `mistyrose`
    }

}


withdrawButton.addEventListener(`click`,handleWithdraw )

if (Number(balanceDisplay.textContent) == 0) {
    balanceDisplay.style.backgroundColor = `mistyrose`
}
