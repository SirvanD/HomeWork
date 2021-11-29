var balance = Number(document.querySelector(".balanceSpan").textContent);
var depositInput = document.querySelector(".depositInput");
var depositBtn = document.querySelector(".depositBtn");
var withdrawInput = document.querySelector(".withdrawInput");
var withdrawBtn = document.querySelector(".withdrawBtn");
var withdrawExcessAlert = document.querySelector(".pExcess");
var freeTrialCount = Number(document.querySelector(".freetrialSpan").textContent)


function deposit() {
    balance = balance + depositInput.valueAsNumber;
    document.querySelector(".balanceSpan").textContent = balance;
    document.querySelector("p").style.backgroundColor = "mistryrose";
    withdrawExcessAlert.style.visibility = "hidden";
}

function withdraw() {
    balance = balance - withdrawInput.valueAsNumber;
    if (freeTrialCount > 0 && balance > -1) {
        document.querySelector(".balanceSpan").textContent = balance;
        withdrawExcessAlert.style.visibility = "hidden";
        reduceFreeTrial()
    } else if (freeTrialCount < 1 && balance >= 20){
        balance = balance - 20; 
        document.querySelector(".balanceSpan").textContent = balance;
        withdrawExcessAlert.style.visibility = "hidden";
        reduceFreeTrial()
    }else {
        balance = balance + withdrawInput.valueAsNumber;
        withdrawExcessAlert.style.visibility = "visible";
        document.querySelector("p").style.backgroundColor = "red";
    }
}

function reduceFreeTrial() {
    freeTrialCount--;  
    if (freeTrialCount > -1) {
        document.querySelector(".freetrialSpan").textContent = freeTrialCount
    } else {
        document.querySelector(".ptrialstart").style.visibility = "hidden";
        document.querySelector(".ptrialend").style.visibility = "visible";
    }  
}


depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);
