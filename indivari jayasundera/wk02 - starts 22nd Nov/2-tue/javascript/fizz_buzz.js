var count = 1;

function FizzBuzz(count) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("Fizz Buzz");
  } else if (count % 3 == 0) {
    console.log("Fizz");
  } else if (count % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(count);
  }
}

while (count <= 100) {
  FizzBuzz(count);
  count++;
}
