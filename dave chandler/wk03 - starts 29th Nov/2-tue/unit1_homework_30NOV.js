//global test arguements;
let stringArray = ["dog","zebra","elephant","ant"];
let numArray = [1,2,3,4,5,6,10];

//DOM references
let boxes = document.querySelectorAll('.box');

//general functions
function transmogrifier(a,b,x){
    return (a*b)**x
}

function sum(numArray){
    return numArray.reduce((a,b) => a+b)
}

function lengths(stringArray){
    let strLengthArray = [];
    stringArray.forEach(element => strLengthArray.push(element.length));
    return strLengthArray;
}

function sumOfLengths(stringArray){
    return sum(lengths(stringArray));
}

function changeBGC(Event){
    Event.target.classList.add('redBG');
    checkBGC();
}

function checkBGC(){
    if(document.querySelectorAll('.redBG').length == boxes.length){
        boxes.forEach(element=>element.classList.add('greenBG'));
    }
}

//handler functions
function handlerBoxes(){
    boxes.forEach(element=>element.addEventListener('click',changeBGC));
}

//page load functions
handlerBoxes();

//tests
console.log('transmogrifier output: ' + transmogrifier(4,3,2));
console.log('sum output: ' + sum(numArray));
console.log('lengths output: ' + lengths(stringArray));
console.log('sum of lengths output: ' +sumOfLengths(stringArray));

