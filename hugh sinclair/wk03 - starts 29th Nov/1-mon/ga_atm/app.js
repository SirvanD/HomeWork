
// Specification:
// Create an ATM web app for customers of GA bank so they can deposit and withdraw money and see their account balance.

// Keep track of account balance somewhere
// Add functionality so that a user can deposit money into the bank account.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from the bank account.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be change to a different colour (for example mistyrose).
// When the balance is positive change the background color back to normal.
// spend some time on CSS. use your imagination. make an effort.
// optional extension
// Your savings account include 10 free withdrawals. If a user tries to withdraw more than 10 times charge a $2 withdrawal fee for every withdrawal there after.

var balance = document.querySelector('.balance')
var input = document.querySelector('input')
var withdrawBtn = document.querySelector('.withdraw-btn')
var depositBtn = document.querySelector('.deposit-btn')
var errorMessage = document.querySelector('.error-msg')
var numFreeWithdrawals = 0


function handleWithdraw() {
    let newBalance = 0
    if (input.value == '') {
        errorMessage.style.visibility = 'visible'
        errorMessage.textContent = `You need to input an amount to withdraw!`
        errorMessage.style.backgroundColor = 'red'
        setTimeout(setErrorMessageToWhite, 200);
        return
    }
    if (numFreeWithdrawals > 10) {
        newBalance = Number(balance.textContent) - Number(input.value) -2
        errorMessage.style.visibility = 'hidden'
    } else {
        newBalance = Number(balance.textContent) - Number(input.value);
        errorMessage.style.visibility = 'hidden'
        numFreeWithdrawals++
    }
    
    if( newBalance >= 0) {
        balance.textContent = newBalance
        errorMessage.style.visibility = 'visible'
        errorMessage.textContent = `You have ${10 - numFreeWithdrawals} free withdrawals before you are charged a $2 withdrawal fee`
    }else {
        errorMessage.style.visibility = 'visible'
        errorMessage.textContent = `You can't withdraw more than you have, including your withdrawal fee`
        errorMessage.style.backgroundColor = 'red'
        setTimeout(setErrorMessageToWhite, 200);
    }
    if (Number(balance.textContent) == 0) {
        balance.style.backgroundColor = 'mistyrose'
    }
    input.value = ''
}

//this function allows me to add a delay to JS reading the css style to make the error message box white again. 
function setErrorMessageToWhite(){
    errorMessage.style.backgroundColor = 'white'
}

function handleDeposit() {
    if (input.value == '') {
        errorMessage.style.visibility = 'visible'
        errorMessage.textContent = `You need to input an amount to deposit!`
        errorMessage.style.backgroundColor = 'red'
        setTimeout(setErrorMessageToWhite, 200);
        return
    }
    let newBalance = Number(balance.textContent) + Number(input.value)
    balance.textContent = newBalance
    if (Number(balance.textContent) > 0) {
        balance.style.backgroundColor = '#fff'
    }
    input.value = ''
    errorMessage.style.visibility = 'hidden'
}


withdrawBtn.addEventListener('click', handleWithdraw)
depositBtn.addEventListener('click', handleDeposit)
