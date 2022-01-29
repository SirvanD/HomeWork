class Clock {
  constructor() {
    this.counter = 0;
  }

  tick() {
    this.counter++;
  }
  now() {
    return this.counter;
  }

  reset() {
    this.counter = 0;
  }
}
module.exports = Clock;
