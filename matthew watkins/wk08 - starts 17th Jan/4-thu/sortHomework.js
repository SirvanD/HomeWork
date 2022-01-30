var horses = [{
        name: 'maythehorsebewithu',
        active: true,
        country: 'AUS',
        yearOfBirth: 2000,
        hourlyRate: 85,
        daysWorked: 400
    },
    {
        name: 'my wife knows everthing',
        active: true,
        country: 'USA',
        yearOfBirth: 2007,
        hourlyRate: 50,
        daysWorked: 250
    },
    {
        name: 'better loosen up',
        active: false,
        country: 'AUS',
        yearOfBirth: 1985,
        hourlyRate: 15,
        daysWorked: 200
    },
    {
        name: 'hoof hearted',
        active: false,
        country: 'AUS',
        yearOfBirth: 1981,
        hourlyRate: 150,
        daysWorked: 100
    },
    {
        name: 'pony',
        active: false,
        country: 'AUS',
        yearOfBirth: 2003,
        hourlyRate: 30,
        daysWorked: 700
    },
    {
        name: 'sunny boy',
        active: true,
        country: 'AUS',
        yearOfBirth: 2003,
        hourlyRate: 110,
        daysWorked: 515
    }
]

const sortedHorses = horses.sort((a, b) => {
    if (a.yearOfBirth > b.yearOfBirth) {
        return 1
    } else if (b.yearOfBirth > a.yearOfBirth) {
        return -1
    } else {
        return 0
    }
})


// console.log(sortedHorses)

// const array = [1, 4, 3, 245, 63456, 3467, 4567]

// const sortedNo = array.sort()

// console.log(sortedNo);


var items = [
    { name: 'apple', type: 'fruit', full_price: 2, discount: 0 },
    { name: 'potato', type: 'vegie', full_price: 5, discount: 0 },
    { name: 'banana', type: 'fruit', full_price: 4, discount: 1 },
    { name: 'orange', type: 'fruit', full_price: 3, discount: 2 },
    { name: 'brocoli', type: 'vegie', full_price: 2, discount: 2 },
]


const sortedItems = items.sort((a, b) => {
    if (a.full_price > b.full_price) {
        return 1
    } else if (b.full_price > a.full_price) {
        return -1
    } else {
        return 0
    }
})

//console.log(sortedItems);

const sortedNames = items.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    } else if (b.name > a.name) {
        return -1
    } else {
        return 0
    }
})

//console.log(sortedItems, sortedNames);


var products = [
    [5, 'kiwi'],
    [3, 'potato'],
    [7, 'apple']
]

const orderedNames = products.sort((a, b) => {
    if (a[1] > b[1]) {
        return -1
    } else if (b[1] < a[1]) {
        return 1
    } else {
        return 0
    }
})
console.log(orderedNames);