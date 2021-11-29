//tags
var amountInput = document.querySelector(".amount")
var depositBtn = document.querySelector(".deposit")
var withdrawBtn = document.querySelector(".withdraw")
var accStatement = document.querySelector(".remaining")
var bodyhtml = document.querySelector("body")
var boxDiv = document.querySelector(".box")
var atmDiv = document.querySelector(".atm")
var tenBtn = document.querySelector(".ten")
var twentyBtn = document.querySelector(".twenty")
var fiftyBtn = document.querySelector(".fifty")
var hundredBtn = document.querySelector(".hundred")
var tenDBtn = document.querySelector(".tenD")
var twentyDBtn = document.querySelector(".twentyD")
var fiftyDBtn = document.querySelector(".fiftyD")
var hundredDBtn = document.querySelector(".hundredD")



//functions
let currAmount = accStatement.textContent = 1000
let i = 0

function depositMoney() {
    let depositInput = Number(amountInput.value)
    accStatement.textContent = currAmount = currAmount + Number(depositInput)
    console.log("current amount", currAmount)
    boxDiv.style.backgroundColor = "rgb(8, 92, 0)";
}

function withdrawMoney() {
    let withdrawInput = Number(amountInput.value)

    if(Number(withdrawInput) <= Number(currAmount) && i < 10) {
        accStatement.textContent = currAmount = Number(currAmount) - Number(withdrawInput)
        i = i+1;
        console.log("index", i)
    } else if (Number(withdrawInput) <= Number(currAmount) && i >=10) {
        accStatement.textContent = currAmount = Number(currAmount) - Number(withdrawInput) - 2
        i++;
        console.log("index", i)
    } else {
        accStatement.textConent = currAmount
    }
    console.log("current amount", currAmount)
        boxDiv.style.backgroundColor = "rgb(222, 235, 107)"
    if(currAmount == 0) {
        boxDiv.style.backgroundColor = "red";
    }
}

function tenWithdraw() {
    if(Number(10) <= Number(currAmount) && i <10) {
        accStatement.textContent = currAmount = Number(currAmount) - 10
        i++;
        console.log("index", i)
    } else if (Number(10) <= Number(currAmount) && i >= 10) {
        accStatement.textContent = currAmount = Number(currAmount) - 10 - 2
        i++;
        console.log("index", i)
    } else {
        accStatement.textConent = currAmount
    }
    console.log("current amount", currAmount)
        boxDiv.style.backgroundColor = "rgb(222, 235, 107)"
    if(currAmount == 0) {
        boxDiv.style.backgroundColor = "red";
    }
}

function twentyWithdraw() {
    if(Number(20) <= Number(currAmount) && i <10) {
        accStatement.textContent = currAmount = Number(currAmount) - 20
        i++;
        console.log("index", i)
    } else if (Number(20) <= Number(currAmount) && i >= 10) {
        accStatement.textContent = currAmount = Number(currAmount) - 20 - 2
        i++;
        console.log("index", i)
    } else {
        accStatement.textConent = currAmount
    }
    console.log("current amount", currAmount)
        boxDiv.style.backgroundColor = "rgb(222, 235, 107)"
    if(currAmount == 0) {
        boxDiv.style.backgroundColor = "red";
    }
}

function fiftyWithdraw() {
    if(Number(50) <= Number(currAmount) && i <10) {
        accStatement.textContent = currAmount = Number(currAmount) - 50
        i++;
        console.log("index", i)
    } else if (Number(50) <= Number(currAmount) && i >= 10) {
        accStatement.textContent = currAmount = Number(currAmount) - 50 - 2
        i++;
        console.log("index", i)
    } else {
        accStatement.textConent = currAmount
    }
    console.log("current amount", currAmount)
        boxDiv.style.backgroundColor = "rgb(222, 235, 107)"
    if(currAmount == 0) {
        boxDiv.style.backgroundColor = "red";
    }
}

function hundredWithdraw() {
    if(Number(100) <= Number(currAmount) && i <10) {
        accStatement.textContent = currAmount = Number(currAmount) - 100
        i++;
        console.log("index", i)
    } else if (Number(100) <= Number(currAmount) && i >= 10) {
        accStatement.textContent = currAmount = Number(currAmount) - 100 - 2
        i++;
        console.log("index", i)
    } else {
        accStatement.textConent = currAmount
    }
    console.log("current amount", currAmount)
        boxDiv.style.backgroundColor = "rgb(222, 235, 107)"
    if(currAmount == 0) {
        boxDiv.style.backgroundColor = "red";
    }
}

function tenDeposit() {
    accStatement.textContent = currAmount = currAmount + 10
    console.log("current amount", currAmount)
    boxDiv.style.backgroundColor = "rgb(8, 92, 0)";
}

function twentyDeposit() {
    accStatement.textContent = currAmount = currAmount + 20
    console.log("current amount", currAmount)
    boxDiv.style.backgroundColor = "rgb(8, 92, 0)";
}

function fiftyDeposit() {
    accStatement.textContent = currAmount = currAmount + 50
    console.log("current amount", currAmount)
    boxDiv.style.backgroundColor = "rgb(8, 92, 0)";
}

function hundredDeposit() {
    accStatement.textContent = currAmount = currAmount + 100
    console.log("current amount", currAmount)
    boxDiv.style.backgroundColor = "rgb(8, 92, 0)";
}

//callbacks

depositBtn.addEventListener("click", depositMoney)
withdrawBtn.addEventListener("click", withdrawMoney)
tenBtn.addEventListener("click", tenWithdraw)
twentyBtn.addEventListener("click", twentyWithdraw)
fiftyBtn.addEventListener("click", fiftyWithdraw)
hundredBtn.addEventListener("click", hundredWithdraw)
tenDBtn.addEventListener("click", tenDeposit)
twentyDBtn.addEventListener("click", twentyDeposit)
fiftyDBtn.addEventListener("click", fiftyDeposit)
hundredDBtn.addEventListener("click", hundredDeposit)