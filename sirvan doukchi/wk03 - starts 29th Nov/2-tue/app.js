//1.transmogrifier

function transmogrifier(num1,num2,num3) {
    return Math.pow((num1 * num2), num3);
    
} transmogrifier (4,3,2);


//2.sum

let numberArray = [2,4,6,8,10];

function sum (array) {
    let total = 0;
    for (let i= 0; i < array.length; i++) {
        total += array[i]
    }return total;    
}

sum([2,4,6,8,10]) //30

//3.lengths
//had to use map function even without fully understanding it! will do more practice on it.

function lengths(stringArray) {
    let countArray = ""
    for (i = 0; i < stringArray.length; i++) {
        //console.log (stringArray[i].length)
        countArray = countArray + [stringArray[i].length] 

        //countArray +  stringArray[i].length;
    } 
    return countArray.split('').map(Number);
}
lengths(['now', 'I', 'know', 'my', 'ABC!']) // => [3,1,4,2,4]
lengths(['my', 'cake', 'pudding']) // => [2,4,7]

//4. sum of lengths
//using the sum and lengths function you wrote in the last 2 questions write code to work out the sum of the lengths of the following fruits array. display the result in the console.
 // your code should print 14
 var fruits = ['kiwi', 'apple', 'mango']

 function sumOfLengths(arr) {
    console.log(sum(lengths(arr))); 
 }
 sumOfLengths(fruits);

 //5. Make Them Green
// Remember to write your assumptions if you feel the question is ambiguous.

// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green.

let allDivs = document.querySelectorAll('div')
let topDiv = document.querySelector('.first')
let middleDiv = document.querySelector('.second')
let bottomDiv = document.querySelector('.third')

allDivs.forEach(function(div){

   div.addEventListener('click', handleClick)
})

function handleClick (event) {
    let userClicked = event.target
    userClicked.style.backgroundColor = 'red'  
    
}

//reset color does not work yet, have to find a way around it.
document.addEventListener('click',handleResetColor)
function handleResetColor () {
    if (topDiv.style.backgroundColor === 'red' && middleDiv.style.backgroundColor === 'red' && bottomDiv.style.backgroundColor === 'red' ) {
        topDiv.style.backgroundColor == 'white'
        middleDiv.style.backgroundColor == 'white'
        bottomDiv.style.backgroundColor == 'white'
    }
}

