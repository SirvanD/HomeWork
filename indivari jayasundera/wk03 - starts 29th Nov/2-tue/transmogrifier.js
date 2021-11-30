function transmogrifier(num1, num2, num3) {
  var result1 = num1 * num2;

  var pwr = 1;
  for (let i = 0; i < num3; i++) {
    pwr = pwr * result1;
  }

  //var result2 = Math.pow(result1, num3);
  return pwr;
}

console.log(transmogrifier(4, 4, 2));
