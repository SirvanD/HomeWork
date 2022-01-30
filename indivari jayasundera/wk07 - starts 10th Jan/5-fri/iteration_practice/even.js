function onlyEven(numArray) {
  evenNums = [];
  numArray.forEach((num) => {
    num % 2 == 0 ? evenNums.push(num) : "odd";
  });

  return evenNums;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(onlyEven(numbers));
