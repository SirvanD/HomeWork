// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

const arr = [1, 2, 3, 4, 5, 6, 7];
const evenArr = [];
arr.forEach((num) => {
  if (num % 2 == 0) {
    evenArr.push(num);
  }
});

console.log(evenArr);

// 2 - filter function
const even = arr.filter((num) => {
  return num % 2 == 0;
});

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(even);

// countIntegers – counts how many integers there are in an array

const countIntegers = (arr) => {
  const outputArr = [];
  arr.forEach((num) => {
    if (Number.isInteger(num)) outputArr.push(num);
  });
  return outputArr.length;
};
console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]));

// 2- filter function
const countIntegers = (arr) => {
  const integers = arr.filter((num) => {
    return Number.isInteger(num);
  });
  return integers.length;
};
console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]));

// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

const lengths = (arr) => {
  const strArr = arr.map((str) => {
    return str.length;
  });
  return strArr;
};
console.log(lengths(["my", "cake", "pudding"]));

// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map

const squares = (arr) => {
  const squareArr = arr.map((num) => {
    return num * num;
  });
  return squareArr;
};
console.log(squares([1, 2, 3, 4, 5]));

// 2- foreach loop
const squares = (arr) => {
  var outputArr = [];
  arr.forEach((num) => {
    outputArr.push(num * num);
  });
  return outputArr;
};
console.log(squares([1, 2, 3, 4, 5]));

// Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions.

var inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 },
];

var total = inventory.reduce((acc, current) => {
  return acc + current["value"];
}, 0);

var valueOver500 = inventory.filter((arr) => {
  return arr["value"] > 500;
});

console.log(total);
console.log(valueOver500);
