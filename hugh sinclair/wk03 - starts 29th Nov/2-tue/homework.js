// # 1. transmogrifier

// Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result

// The transmogrified result of three numbers is the product of the first two numbers, 
// raised to the power of the third number.

// ```javascript
// transmogrified(4,3,2) // => 24 //this is wrong btw, that's (4*3)*2
// ```

function transmogrifier(num1, num2, num3){
    transmogrify = (num1*num2) ** num3
    return transmogrify
}






// # 2. sum

// Write a function `sum` that accepts a single parameter as an argument, namely
// an array of numbers. The function should return the sum of all the numbers in the array

// ```javascript
// sum([1,2,3,4]) // = 10
// ```

function sum(numArray){
    let indexTotal = 0
    for (let i = 0; i <numArray.length; i++) {
        indexTotal = indexTotal + numArray[i]
    }
    return indexTotal
}



// # 3. lengths

// Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// ```javascript
// lengths(['my', 'cake', 'pudding']) // => [2,4,7]
// lengths(['now', 'I', 'know', 'my', 'ABC!']) // => [3,1,4,2,4]
// ```

function lengths(strArray){
    let indexNumOfLetters = []
    for (let i = 0; i <strArray.length; i++){
        indexNumOfLetters.push(strArray[i].length)
    }
    return indexNumOfLetters
}






// # 4. sum of lengths

// **using the `sum` and `lengths` function** you wrote in the last 2 questions write code to work out the sum of the lengths of the following fruits array. display the result in the console. 

// ```javascript
var fruits = ['kiwi', 'apple', 'mango']
// ```

// your code should print 14

console.log(sum(lengths(fruits)));







// # 5. Make Them Green

// **Remember to write your assumptions if you feel the question is ambiguous.**

// 1. Create 3 boxes (divs) in an html file, give them a border of `1px solid black` and a height and width of `100px`, so you can see them.
// 2. When you click on any box, it's background color should immediately become **red**.
// 3. After **every** box has been clicked, change all of them immediately to **green**.

var boxes = document.querySelectorAll('section div')
var isTrue = false



function checkAllTrue(array){
    isTrue = false
    for (let i = 0; i < array.length; i++){
        if (array[i] == false){
            isTrue = false
            return
        } else isTrue = true
    }
}

function handleClick(event){


    //this is just somerthing I'm gunna try to come back to and make work
    //make a global variable, object with box1 = false box2 = false etc
    // have it so that if the background color ISNT red, put false onto that boxes' object, then if ALL of the boxes are true, make em green ? will need a lot of thinking
    var truthArray = []
    if(event.target.style.backgroundColor == 'green'){
        return
    } else {
        event.target.style.backgroundColor = 'red'
    }
    
    boxes.forEach(function(box){
        truthArray = [];
        if (box.style.backgroundColor == 'red'){
            truthArray.push(true)
        } else truthArray.push(false)
    });
    checkAllTrue(truthArray);
    if (isTrue){
        boxes.forEach(function(box){
            box.style.backgroundColor = 'green'
        })
    }



    // event.target.style.backgroundColor = 'red'
    // if (boxes[0].style.backgroundColor == 'red' && boxes[1].style.backgroundColor == 'red' && boxes[2].style.backgroundColor == 'red'){
    //     boxes[0].style.backgroundColor = 'green'
    //     boxes[1].style.backgroundColor = 'green'
    //     boxes[2].style.backgroundColor = 'green'
    // }
}



boxes.forEach(function(box){
    box.addEventListener('click', handleClick)
})



