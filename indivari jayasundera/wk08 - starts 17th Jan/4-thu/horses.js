// authorized by the department of celebrating gambling, alcohol abuse and animal cruelty all in one day.

var horses = [
  {
    name: "maythehorsebewithu",
    active: true,
    country: "AUS",
    yearOfBirth: 2000,
    hourlyRate: 85,
    daysWorked: 400,
  },
  {
    name: "my wife knows everthing",
    active: true,
    country: "USA",
    yearOfBirth: 2007,
    hourlyRate: 50,
    daysWorked: 250,
  },
  {
    name: "better loosen up",
    active: false,
    country: "AUS",
    yearOfBirth: 1985,
    hourlyRate: 15,
    daysWorked: 200,
  },
  {
    name: "hoof hearted",
    active: false,
    country: "AUS",
    yearOfBirth: 1981,
    hourlyRate: 150,
    daysWorked: 100,
  },
  {
    name: "pony",
    active: false,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 30,
    daysWorked: 700,
  },
  {
    name: "sunny boy",
    active: true,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 110,
    daysWorked: 515,
  },
];

// sort the horses by year of birth from youngest to oldest

console.log(
  horses.sort(function (h1, h2) {
    // return h2.yearOfBirth - h1.yearOfBirth; // this works too
    if (h2.yearOfBirth > h1.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  })
);

var items = [
  { name: "apple", type: "fruit", full_price: 2, discount: 0 },
  { name: "potato", type: "vegie", full_price: 5, discount: 0 },
  { name: "banana", type: "fruit", full_price: 4, discount: 1 },
  { name: "orange", type: "fruit", full_price: 3, discount: 2 },
  { name: "brocoli", type: "vegie", full_price: 2, discount: 2 },
];

// sort items by full price from cheapest to most expensive

console.log(
  items.sort(function (item1, item2) {
    return item1.full_price - item2.full_price;
  })
);

// sort items by name in the ascending order
console.log(
  items.sort((item1, item2) => {
    if (item1.name > item2.name) {
      return 1;
    } else {
      return -1;
    }
  })
);

// sort products by name in descending order

var products = [
  [5, "kiwi"],
  [3, "potato"],
  [7, "apple"],
];

console.log(
  products.sort(function (a, b) {
    if (a[1] > b[1]) {
      return 1;
    } else {
      return -1;
    }
  })
);
