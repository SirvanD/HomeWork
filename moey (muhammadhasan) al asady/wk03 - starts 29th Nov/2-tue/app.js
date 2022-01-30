// var num1 = 4,
// var num2 = 3,
// var num3 = 2,





function transmogrified (num1, num2, num3) {
    var num3 = num1 * num2
    total = num3 * num3
    return total
}

transmogrified (4, 3, 2);

// .2 SUM

arrayNum = [1,2,3,4];


function sum (arrayNum) {
    var j = 0;

    for(let i = 0; i < arrayNum.length; i++){
        j += Number(arrayNum[i]);

    }
    return j
}



//3. lengths

food = ['my', 'cake', 'pudding'];


function lengths (food) {
    var wordCount = [];

    for(let i = 0; i < food.length; i++){
        wordNum = food[i].length;
        wordCount.push(wordNum)
    } 
    return wordCount
}

//4. Sum of Lengths

var fruits = ['kiwi', 'apple', 'mango']
// var fruitsLength = lengths(fruits)
// console.log(sum(fruitsLength))
console.log(sum(lengths(fruits)))
// var wordCount = [];
// var j = 0;


// function sumOfLengths (fruits) {
//     for(let i = 0; i < fruits.length; i++){
//         wordNum = fruits[i].length;
//         wordCount.push(wordNum);
//         for(let i = 0; i < wordCount.length; i++){
//         j += Number(wordCount[i]);

//     }

//     } 
//     console.log(j)
// }

//MAKE THEM GREEN

// var box1 = document.querySelector('.box1');
// var box2 = document.querySelector('.box2');
// var box3 = document.querySelector('.box3');

// function turnRed(event){
//     var userClick = event.target;
//     console.log(event.target);
//     userClick.disabled = true;
//     userClick.style.backgroundColor = "red";


//     if (box1.style.backgroundColor == "red" && box2.style.backgroundColor == "red" && box3.style.backgroundColor == "red") {
//         box1.style.backgroundColor = "green";
//         box2.style.backgroundColor = "green";
//         box3.style.backgroundColor = "green";
//     }
// }

/// WORKSSS ^^^


// function turnRedd(event){
//     var userClick = event.target;
//     userClick.disabled = true;
//     box2.style.backgroundColor = "red";
//     if (box1.style.backgroundColor == "red" && box2.style.backgroundColor == "red" && box3.style.backgroundColor == "red") {
//         box1.style.backgroundColor = "green";
//         box2.style.backgroundColor = "green";
//         box3.style.backgroundColor = "green";
//     }
// }
// function turnReddd(event){
//     var userClick = event.target;
//     userClick.disabled = true;
//     box3.style.backgroundColor = "red";
//     if (box1.style.backgroundColor == "red" && box2.style.backgroundColor == "red" && box3.style.backgroundColor == "red") {
//         box1.style.backgroundColor = "green";
//         box2.style.backgroundColor = "green";
//         box3.style.backgroundColor = "green";
//     }
// }

// function turn

// __________________________________________________________________

// box1.addEventListener('click', turnRed);
// box2.addEventListener('click', turnRed);
// box3.addEventListener('click', turnRed);

//WORKS^^^^



// if (box1.backgroundColor == "red" && box2.backgroundColor == "red" && box3.backgroundColor == "red") {
//     box1.style.backgroundColor = "green";
//     box2.style.backgroundColor = "green";
//     box3.style.backgroundColor = "green";
// }






