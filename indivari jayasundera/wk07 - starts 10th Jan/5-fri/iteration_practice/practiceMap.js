function lengths(strArray) {
  let lengthsArray = [];
  lengthsArray = strArray.map((word) => {
    return word.length;
  });

  return lengthsArray;
}

console.log(lengths(["my", "cake", "pudding"]));
