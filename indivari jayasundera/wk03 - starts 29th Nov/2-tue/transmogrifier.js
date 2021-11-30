function transmogrifier(num1, num2, num3) {
  var result1 = num1 * num2;

  var result2 = Math.pow(result1, num3);
  return result2;
}

console.log(transmogrifier(3, 4, 2));
