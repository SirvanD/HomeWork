// Create a Clock class in clock.js, which has the following attributes:

// counter - a integer, with the initial value of 0
// And the following methods:

// tick() - increment the counter by 1
// now() - returns counter
// reset() - resets counter to 0
// Create another file app.js to use test out the Counter class
// you should be able to call all the following methods

class Clock {
  constructor(counter = 0) {
    console.log("counter is created");
    this.counter = counter;
  }

  tick() {
    this.counter += 1;
  }
  now() {
    console.log(this.counter);
    return this.counter;
  }

  reset() {
    this.counter = 0;
  }
}

module.exports = Clock;
