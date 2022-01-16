function countIntegers(numArray) {
  let intArray = [];
  intArray = numArray.filter((num) => Number.isInteger(num));

  return intArray.length;
}

console.log(countIntegers([4.3, 5.1, 8, 2.2, 120]));

function countIntegers(numArray) {
  let count = 0;
  numArray.forEach((num) => {
    Number.isInteger(num) ? count++ : "not an integer";
  });

  return count;
}

console.log(countIntegers([4.3, 5.1, 8, 2.2, 120]));
