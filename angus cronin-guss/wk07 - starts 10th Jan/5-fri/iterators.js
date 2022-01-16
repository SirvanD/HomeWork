//Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter
// let evenArray = []
// function onlyEven(array) {
//     array.forEach(number => {
//         if (number % 2 === 0) {
//             evenArray.push(number)
//         }   
//     });
//     return evenArray
// }

// onlyEven([1,2,3,4])

// const onlyEven = array => array.filter( number => number % 2 === 0 );

// console.log(onlyEven([1, 2, 3, 4, 5, 6]))

// Question 2 -  counts how many integers there are in an array
// let integers = []
// function countIntegers(array) {
//     array.forEach(number => {
//         if (number % 1 === 0) {
//             integers.push(number)
//         }
//     });
//     console.log(integers.length);
// }
// countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4])

// const countIntegers = array => array.filter( number => number % 1 === 0).length
// console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]));

// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

function lengths(array) {
    let wordLengths = []
    array.map(function(word){
        wordLengths.push(word.length)
    })
    console.log(wordLengths);
    
}
lengths(['my', 'cake', 'pudding'])

