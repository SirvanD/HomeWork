//accessing to the elements in html
let balanceBox = document.querySelector('.balance-box');
//balanceBox.value = "60";
let inputBox = document.querySelector('.input-box')
let depositBtn = document.querySelector('.deposit-btn');
let withdrawBtn = document.querySelector('.withdraw-btn');
let warningBox = document.querySelector('.warning-box')
let counter = 1;
//warningBox.innerText = 'test';

//function for checking if current balance is over 0 or not
//changes background color of balancebox accordingly



function BGC() {
    if (balanceBox.value <= 0) {
        balanceBox.style.backgroundColor = 'mistyrose'
    } else {
        balanceBox.style.backgroundColor = 'white' 
    }
}

//deposit function
//event handler
function handleDeposit() {
    balanceBox.value = Number(balanceBox.value) + Number(inputBox.value) ;
    BGC();
    warningBox.innerText = ''
}
depositBtn.addEventListener('click', handleDeposit);


//withdraw function
//event handler


function handleWithdraw() {    
        
    let newBalance = Number(balanceBox.value) - Number(inputBox.value)
    //console.log (newBalance) 


    if (newBalance >= 0 && counter <= 10) {
    
        balanceBox.value = Number(balanceBox.value) - Number(inputBox.value)  
        counter++;
        console.log(counter)
    }else if (newBalance > 0 && counter > 10) {
        warningBox.innerText = 'You have reached your 10 free withdrawal limit, you will be charged $2 for each withdrawal you make now'
        balanceBox.value = Number(balanceBox.value) - Number(inputBox.value) - 2;
    } if (newBalance < Number(inputBox.value ))   {
        warningBox.innerText = 'You do not have enough money to withdraw'
    }
    
BGC()
}
    

withdrawBtn.addEventListener('click', handleWithdraw);

