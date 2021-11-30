function lengths(array) {
  const lengthArray = [];
  for (let i = 0; i < array.length; i++) {
    var len = array[i].length;
    lengthArray.push(len);
  }
  return lengthArray;
}

console.log(lengths(["my", "cake", "pudding"]));
console.log(lengths(["now", "I", "Know", "My", "ABC!"]));
