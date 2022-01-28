class Clock {
    constructor(counter) {
        this.counter = 0;
    }
    tick() {
        this.counter += 1
    }
    now() {
        return this.counter
    }
    reset() {
        this.counter = 0
    }
}


clock = new Clock()
clock.tick()
clock.tick()
clock.tick()
clock.now()
clock.reset()
clock.now()