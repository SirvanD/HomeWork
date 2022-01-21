function onlyEven(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

function countIntegers(numbers) {
  return numbers.filter((number) => Math.floor(number) === number);
}

function lengths(strings) {
  return strings.map((string) => string.length);
}

function getSquares(numbers) {
  return numbers.map((number) => number ** 2);
}

var inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 },
];

let totalSum = inventory.filter(({ type }) => type == "machine").reduce((total, item) => total + item.value, 0);

console.log(onlyEven([1, 2, 3, 4, 5, 6, 7]));
console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]));
console.log(lengths(["my", "cake", "pudding"]));
console.log(getSquares([1, 2, 3, 4, 5]));
console.log(totalSum);
