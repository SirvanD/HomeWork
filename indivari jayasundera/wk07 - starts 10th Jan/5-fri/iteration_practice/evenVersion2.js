function onlyEven(numArray) {
  let evenNums = [];
  evenNums = numArray.filter((num) => {
    return num % 2 == 0;
  });
  return evenNums;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(onlyEven(numbers));
