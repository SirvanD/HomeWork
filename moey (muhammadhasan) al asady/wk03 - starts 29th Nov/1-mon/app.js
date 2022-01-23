var depositInput = document.querySelector('.input1'); 
var depositBtn = document.querySelector('.deposit-btn'); 
var result = document.querySelector('.result-span'); 
var withdrawlInput = document.querySelector('.input2'); 
var withdrawlBtn = document.querySelector('.withdrawl-btn'); 
var resultSpan = document.querySelector('.result-span');
var atm = document.querySelector('.atm');

//DEPOSIT  MONEY
function depositMoney (event) {
    var userClick = event.target;
    resultSpan.textContent = Number(resultSpan.textContent) + Number(depositInput.value);
    atm.style.backgroundColor = 'gray';
    document.body.style.backgroundColor = 'white';


}
depositBtn.addEventListener('click', depositMoney)

//WITHDRAWL MONEY AND DECLINE
function withdrawlMoney (event) {
    var userClick = event.target;
    resultSpan.textContent = Number(resultSpan.textContent) - Number(withdrawlInput.value);
    // if (Number(resultSpan.textContent) < Number(withdrawlInput.value)){
    //         resultSpan.textContent = Number(resultSpan.textContent) + Number(withdrawlInput.value); //Its shit but it works 
    //         alert('NOT ENOUGH CASH')
    // } else if (Number(resultSpan.textContent) === Number(withdrawlInput.value)) {
    //     resultSpan.textContent = Number(withdrawlInput.value) - Number(resultSpan.textContent);
    // }
    if (resultSpan.textContent == Number('0')) {
        atm.style.backgroundColor = 'red';
        document.body.style.backgroundColor = 'black';
        alert('GO TO THE PUB')
    } else if (resultSpan.textContent < Number('0')){
        resultSpan.textContent = Number(resultSpan.textContent) + Number(withdrawlInput.value);
        alert('You do not have enough in the account')
    }
}
// }
withdrawlBtn.addEventListener('click', withdrawlMoney)





// deposit.addEventListener('click',)
// function handleClick (event) {
//     var theOneTheUserClickedOn = event.target;
     
//     