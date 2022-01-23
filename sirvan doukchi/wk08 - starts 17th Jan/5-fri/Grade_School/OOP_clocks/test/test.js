const Clock = require("../src/clock");
const assert = require("assert");

// import Clock from "../src/clock";

// clock = new Clock();
// clock.tick();
// clock.tick();
// clock.tick();
// clock.now(); // 3
// clock.reset();
// clock.now(); // 0

describe("Clock", () => {
  it("should have a counter attribute", () => {
    const clock = new Clock();

    const expected = true;
    const actual = clock.hasOwnProperty("counter");

    assert.strictEqual(actual, expected);
  });

  it("counter should have an initial value of 0", () => {
    const clock = new Clock();

    const expected = 0;
    const actual = clock.counter;

    assert.strictEqual(actual, expected);
  });

  it("tick() should increment the counter by 1", () => {
    const clock = new Clock();
    clock.tick();

    const expected = 1;
    const actual = clock.counter;

    assert.strictEqual(actual, expected);
  });

  it("now() should return the counter", () => {
    const clock = new Clock();

    const expected = 0;
    const actual = clock.now();

    assert.strictEqual(actual, expected);
  });

  it("reset() should reset the counter to 0", () => {
    const clock = new Clock();
    clock.tick();
    clock.tick();
    clock.reset();

    const expected = 0;
    const actual = clock.counter;

    assert.strictEqual(actual, expected);
  });
});
