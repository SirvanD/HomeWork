console.log("atm");

var numInput = document.querySelector('.num-input');
var oldBalance = document.querySelector('.old-balance');
var newBalance = document.querySelector('.new-balance');
var depositBtn = document.querySelector('.deposit-btn');
var withdrawBtn = document.querySelector('.withdraw-btn');
var resetBtn = document.querySelector('.reset-btn');
var cancelBtn = document.querySelector('.cancel-btn');

var oldBalance = 100;
document.querySelector('.old-balance').textContent = oldBalance;

function handleDeposit(){
    var newBalance = oldBalance + Number(numInput.value)
    document.querySelector('.new-balance').textContent = newBalance;
    console.log("deposit");
}
depositBtn.addEventListener('click',handleDeposit)

function handleWithdraw(){
    var total = oldBalance - Number(numInput.value)
   if (total < 0){
        document.querySelector('.new-balance').textContent = "Insufficient balance. Press cancel to restart.";
    } else {
        var newBalance = total;
        document.querySelector('.new-balance').textContent = newBalance;
    }
    console.log("withdraw")
}
withdrawBtn.addEventListener('click',handleWithdraw)

function handleReset(){
    numInput.value = '';
    newBalance.textContent = '';
    document.querySelector('.old-balance').textContent = "?";
    console.log("afterTransaction"); 
}
resetBtn.addEventListener('click',handleReset)

function handleCancel(){
    numInput.value = '';
    newBalance.textContent = '';
    console.log("cancel"); 
}
cancelBtn.addEventListener('click',handleCancel)

//didn't figure out how to let oldBalance equals the last total after clicked 



