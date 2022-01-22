// authorized by the department of celebrating gambling, alcohol abuse and animal cruelty all in one day.

var horses = [
    {
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
  
  // sort the horses by year of birth from youngest to oldest

  let calcAge = birthYear => {
      return 2022 - birthYear
  }

  horses.forEach(horse => {
      horse.age = calcAge(horse.yearOfBirth)
  })
  
  horses.sort((a, b) => a.age - b.age)

//  console.log(horses);
  
  
  var items = [
    { name: 'apple', type: 'fruit', full_price: 2, discount: 0 },
    { name: 'potato', type: 'vegie', full_price: 5, discount: 0 },  
    { name: 'banana', type: 'fruit', full_price:4, discount: 1 },
    { name: 'orange', type: 'fruit', full_price: 3, discount: 2 },
    { name: 'brocoli', type: 'vegie', full_price: 2, discount: 2 },
  ]
  
  // sort items by full price from cheapest to most expensive
  items.sort((a, b) => a.full_price - b.full_price)

// console.log(items);

  // sort items by name in the ascending

  items.sort((a, b) => {
      if (a.name < b.name) {
          return -1;
      } else if (a.name > b.name) {
          return 1;
      } else {
          return 0
      }
  })

//   console.log(items);
  
  var products = [
    [5, 'kiwi'],
    [3, 'potato'],
    [7, 'apple']
   ]
   
   // sort products by name in descending order

   products.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else {
            return 0
        }
    })
    
    products.reverse()


    // console.log(products);