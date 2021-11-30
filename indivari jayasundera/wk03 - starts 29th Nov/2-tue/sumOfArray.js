function sum(array) {
  var tot = 0;
  for (let i = 0; i < array.length; i++) {
    tot += Number(array[i]);
  }
  return tot;
}

console.log(sum(["1", "2", "3", "4", "5"]));
