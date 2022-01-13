var items = [
    { name: 'apple', type: 'fruit', full_price: 2, discount: 0 },
    { name: 'potato', type: 'vegie', full_price: 5, discount: 0 },  
    { name: 'banana', type: 'fruit', full_price:4, discount: 1 },
    { name: 'orange', type: 'fruit', full_price: 3, discount: 2 },
    { name: 'brocoli', type: 'vegie', full_price: 2, discount: 2 },
]

// calculate total price of all the fruits after discount

let fruits = items
    .filter(item => item.type === 'fruit')
    .map(fruit => fruit.full_price - fruit.discount)
    .reduce((total, price) => total + price, 0)

    console.log(fruits)