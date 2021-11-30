function sum(array) {
  var tot = 0;
  for (let i = 0; i < array.length; i++) {
    tot += Number(array[i]);
  }
  return tot;
}

function lengths(array) {
  const lengthArray = [];
  for (let i = 0; i < array.length; i++) {
    var len = array[i].length;
    lengthArray.push(len);
  }
  return lengthArray;
}

var fruits = ["kiwi", "apple", "mango"];

console.log(sum(lengths(fruits)));
