//DOM references
let balance = document.getElementById('balance');
let transType = document.querySelector('#trans-type h1');
let transAmount = document.getElementById('trans-amount');
let enterBtn = document.getElementById('enterBtn');
let transactionMessage = document.getElementById('transaction');
let cancelBtn = document.getElementById('cancelBtn');
let withdrwBtn = document.getElementById('withdrwBtn');
let depositBtn = document.getElementById('depositBtn');
let transactionAmount = document.getElementById('transValue');
let displayScreen = document.querySelector('.screen-transactions');
let start = document.getElementById('money-slot');
let welcomeMsg = document.querySelector(".welcome-screen h1");
let dollarSign = document.getElementById('dollar-symbol');

//global variables
let numPad = [];
let transactionOperator = '';
let currBalance = Number(balance.textContent);

//general functions
function calcBalance(amount){
    dollarSignBlinking(false);
    if(transactionOperator=="+"){
        balance.textContent = currBalance + Number(amount);
    } else {
        balance.textContent = currBalance - Number(amount);
    }
    if(balance.textContent==0){
        displayScreen.style.backgroundColor='mistyrose';
    } else if (Number(balance.textContent)<0){
        displayScreen.style.backgroundColor='orange';
    } else {
        displayScreen.style.backgroundColor='#f8f8f8';
    }
}

function checkBalance(){
    if(Number(balance.textContent)>=0){
        return true;
    }
    return false;
}

function goodbye(){
    if(checkBalance()){
        welcomeMsg.textContent = "Thanks for the casssh!"
        currBalance = Number(balance.textContent);
    } else {
        welcomeMsg.textContent = "Transaction was negative & ignored!";
        balance.textContent = currBalance;
    }
    setTimeout(()=>welcomeMsg.textContent = "WELCOME",2000);
}

function keypadDisabled(status){ 
    for(i=0; i<10;i++){
        numPad[i].disabled = status;
    }
}

function dollarSignBlinking(turnOn){
    if(turnOn){
        dollarSign.classList.add('blink');
    } else {
        dollarSign.classList.remove('blink');
    }
}

//handler functions
function attachNumPadHandlers(){
    for(i=0; i<10; i++){
        numPad.push(document.getElementById('button'+i));
    }
}

function handlerNumPad(Event){
    if(transactionAmount.textContent.length<7){
        transactionAmount.textContent += Event.srcElement.textContent;
        calcBalance(Number(transactionAmount.textContent));
    }
}

function handleStart(){
    document.querySelector('#money-slot .blink').textContent="CARD ACCEPTED"
    document.querySelector('.status').style.color="green";
    document.querySelector('#money-slot .blink').style.animation="none";
    document.querySelector('.welcome-screen').style.display="none"
    document.querySelector('.screen-transactions').style.display="grid"
    transType.classList.add("blink");
    keypadDisabled(true);
    dollarSignBlinking(false);
}

function handleCancel(){
    document.querySelector('#money-slot .blink').textContent="INSERT CARD HERE"
    document.querySelector('.status').style.color="red";
    document.querySelector('#money-slot .blink').style.animation=" blinker 2s step-end infinite";
    document.querySelector('.welcome-screen').style.display="grid"
    transactionAmount.textContent="";
    transType.textContent="?";
    transType.style.color="#000";
    transType.classList.remove("blink");
    withdrwBtn.disabled = false;
    depositBtn.disabled = false;
    withdrwBtn.style.backgroundColor = "rgba(0, 38, 255, 0.577)";
    depositBtn.style.backgroundColor = "rgb(149, 216, 15)";
    document.querySelector('.screen-transactions').style.display="none";
    transAmount.style.display="none";
    balance.textContent = currBalance;
    displayScreen.style.backgroundColor='#f8f8f8';
    keypadDisabled(true);

}

function handleEnter(){
    document.querySelector('#money-slot .blink').textContent="INSERT CARD HERE"
    document.querySelector('.status').style.color="red";
    document.querySelector('#money-slot .blink').style.animation=" blinker 2s step-end infinite";
    document.querySelector('.welcome-screen').style.display="grid"
    transactionAmount.textContent="";
    transType.textContent="?";
    transType.style.color="#000";
    transType.classList.remove("blink");
    withdrwBtn.disabled = false;
    depositBtn.disabled = false;
    withdrwBtn.style.backgroundColor = "rgba(0, 38, 255, 0.577)";
    depositBtn.style.backgroundColor = "rgb(149, 216, 15)";
    document.querySelector('.screen-transactions').style.display="none";
    transAmount.style.display="none";
    displayScreen.style.backgroundColor='#f8f8f8';
    keypadDisabled(true);
    goodbye();
}

function handleDeposit(){
    transType.textContent="A DEPOSIT";
    transType.style.color="rgb(149, 216, 15)";
    transType.classList.remove("blink");
    transAmount.style.display="grid";
    transactionOperator = "+";
    withdrwBtn.disabled = true;
    withdrwBtn.style.backgroundColor = "#ccc";
    depositBtn.disabled = true;
    depositBtn.style.backgroundColor = "#ccc";
    transactionMessage.textContent = "DEPOSITING";
    keypadDisabled(false);
    dollarSignBlinking(true);
}

function handleWithdrawl(){
    transType.textContent="A WITHDRAWL";
    transType.style.color="rgba(0, 38, 255, 0.577)";
    transType.classList.remove("blink");
    transAmount.style.display="grid";
    transactionOperator = "-";
    withdrwBtn.disabled = true;
    withdrwBtn.style.backgroundColor = "#ccc";
    depositBtn.disabled = true;
    depositBtn.style.backgroundColor = "#ccc";
    transactionMessage.textContent = "WITHDRAWING";
    keypadDisabled(false);
    dollarSignBlinking(true);
}

//event listeners
function attachNumPadListeners(){
    for(i=0; i<10; i++){
        numPad[i].addEventListener('click',handlerNumPad);
    }
    keypadDisabled(true);
}

start.addEventListener('click',handleStart);
cancelBtn.addEventListener('click',handleCancel);
depositBtn.addEventListener('click',handleDeposit);
withdrwBtn.addEventListener('click',handleWithdrawl);
enterBtn.addEventListener('click',handleEnter);

//run functions - should really use a DOM onLoad callback
attachNumPadHandlers();
attachNumPadListeners();