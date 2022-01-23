console.log("atm");

var numInput = document.querySelector('.num-input');
var balance = document.querySelector('.balance');
var depositBtn = document.querySelector('.deposit-btn');
var withdrawBtn = document.querySelector('.withdraw-btn');
var resetBtn = document.querySelector('.reset-btn');
var cancelBtn = document.querySelector('.cancel-btn');
var newtranBtn = document.querySelector('.newtran-btn');

function handleDeposit(){
    var deposit = Number(numInput.value);
    var oldBalance = Number(balance.textContent);
    var newBalance = deposit + oldBalance;
    if (newBalance <= 0) {
        document.querySelector('.balance').style.backgroundColor = "mistyrose";
        document.querySelector('.balance').style.color = "red";
        document.querySelector('.balance').textContent = newBalance;
    } else {
        document.querySelector('.balance').style.backgroundColor = "";
        document.querySelector('.balance').style.color = "black";
        document.querySelector('.balance').textContent = newBalance;
        document.querySelector('h3').textContent = "YOUR BALANCE:"
    }
    console.log("deposit");
}
depositBtn.addEventListener('click',handleDeposit)


function handleWithdraw(){
    var withdraw = Number(numInput.value);
    var oldBalance = Number(balance.textContent);
    var newBalance = oldBalance -withdraw;

   if (newBalance < 0){
        document.querySelector('h3').textContent = "Insufficient balance. Press cancel to restart.";
    } else if (newBalance ==0) {
        document.querySelector('.balance').style.backgroundColor = "mistyrose";
        document.querySelector('.balance').style.color = "red";
        document.querySelector('.balance').textContent = newBalance;
    } else {
        document.querySelector('.balance').textContent = newBalance;
    }
    console.log("withdraw")
}
withdrawBtn.addEventListener('click',handleWithdraw)

function handleReset(){
    numInput.value = '';
    document.querySelector('h3').textContent = "YOU TRANSACTION IS CONFIRMED";
    console.log("afterTransaction"); 
}
resetBtn.addEventListener('click',handleReset)

function handleCancel(){
    numInput.value = '';
    document.querySelector('h3').textContent = "YOUR BALANCE:";
    document.querySelector('.balance').style.backgroundColor = "";
    document.querySelector('.balance').style.color = "black";
    console.log("cancel"); 
}
cancelBtn.addEventListener('click',handleCancel)

function handleNewtran(){
    numInput.value = '';
    document.querySelector('h3').textContent = "YOUR BALANCE:";
    document.querySelector('.balance').style.backgroundColor = "";
    document.querySelector('.balance').style.color = "black";
    console.log("newtran"); 
}
newtranBtn.addEventListener('click',handleNewtran)










