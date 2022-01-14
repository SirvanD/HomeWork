// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

const onlyEven = (arr) => {
  var evenArr = [];
  arr.forEach((num) => {
    if (num % 2 == 0) evenArr.push(num);
  });
  return evenArr;
};

const onlyEven2 = (arr) => {
  const evenArr2 = arr.filter((num) => {
    return num % 2 == 0;
  });
  return evenArr2;
};

console.log(onlyEven([1, 2, 3, 4, 5, 6, 7])); // => [2,4,6]
console.log(onlyEven2([1, 2, 3, 4, 5, 6, 7])); // => [2,4,6]
//-------------------------------------------------------
//countIntegers – counts how many integers there are in an array
//Number.isInteger(value)

const countIntegers = (arrInput) => {
  var outputArr = [];
  arrInput.forEach((num) => {
    if (Number.isInteger(num)) outputArr.push(num);
  });
  return outputArr.length;
};

const countIntegers2 = (arrInput) => {
  const integers = arrInput.filter((num) => {
    return Number.isInteger(num);
  });
  return integers.length;
};

console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4])); // => 4
console.log(countIntegers2([4, 2.2, 5, 6, 4.2, 8.2, 4])); // => 4

//-------------------------------------------------------

// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

const lengths = (arrInput) => {
  const result = arrInput.map((str) => {
    return str.length;
  });
  return result;
};

console.log(lengths(["my", "cake", "pudding"])); // => [2,4,7]
//--------------------------------------------------
// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map

const getSquares = (arrInput) => {
  var outputArr = [];
  arrInput.forEach((num) => {
    outputArr.push(num * num);
  });
  return outputArr;
};

const getSquares2 = (arrInput) => {
  const squares = arrInput.map((num) => {
    return num * num;
  });
  return squares;
};

console.log(getSquares([1, 2, 3, 4, 5])); // => [1, 4, 9, 16, 25]
console.log(getSquares2([1, 2, 3, 4, 5])); // => [1, 4, 9, 16, 25]

//----------------------------------------------------
// 1.Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions.
// 2.Get an array of all the machines with value over 500

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

var valueOver500 = inventory.filter((obj) => {
  return obj["value"] > 500;
});

console.log(total);
console.log(valueOver500);
