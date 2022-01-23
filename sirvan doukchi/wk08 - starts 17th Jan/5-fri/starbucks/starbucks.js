// Write a program that holds on to coffee orders.

// let order1 = new Order('latte','Darryl')
// order1.name // 'Darryl'
// order1.item // 'latte'
// Write the toString method for this class so when you

// console.log(`order 1: ${order1}`)
// you will have "order 1: Darryl's latte"

class Order {
  constructor(item, name) {
    this.item = item;
    this.name = name;
    this.time = `${new Date().getHours()}:${new Date().getMinutes()}`;
    // this.firstLetter = name.charAt(0);
  }

  test() {
    return this.firstLetter;
  }

  toString() {
    // this.name = `B${this.name.slice(1)}`;
    this.name = "Barrel";
    return `${this.name}'s ${this.item}`;
  }
}

let order1 = new Order("latte", "Darryl");
order1.name; // 'Darryl'
order1.item;
console.log(`order 1: ${order1}`);
console.log(order1); //> { name: "Barrel", item: "latte" }
