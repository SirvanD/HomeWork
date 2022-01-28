const Clock = require("./clock.js");
// testing the class Clock

// It should create a clock object with a counter attribute

const c1 = new Clock();

console.log(c1);
//Expected output : Clock{counter:0}
//Actual output : Clock{counter=0}
//Expected output == Actual output

//It should increment the counter by one when the tick() method is called.
c1.tick();
console.log(c1);
//Expected output: Clock{counter:1}
//Actual output: Clock{counter:1}
//Actual output == Expected output

//It should return the current couter value when now() method is called
console.log(c1.now());
//Expected output: 1
//Actual output: 1
//Expected output == Actual output

//It should reset the couter to 0 when reset() method is called
c1.reset();
console.log(c1);
//Expected output: Clock{counter:0}
//Actual output: Clock{counter:0}
//Actual output == Expected output
