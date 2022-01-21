// function getSquares(numArray) {
//   let pwrArray = [];
//   numArray.forEach((num) => {
//     pwrArray.push(num * num);
//   });
//   return pwrArray;
// }

// console.log(getSquares([1, 2, 3, 4, 5]));

function getSquares(numArray) {
  return (pwrArray = numArray.map((num) => {
    return num * num;
  }));
}

console.log(getSquares([1, 2, 3, 4, 5]));
