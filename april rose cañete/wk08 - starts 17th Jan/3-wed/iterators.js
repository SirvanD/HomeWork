// using for, forEach, map, filter, sort, reduce

var users = [
    { id: 1, username: "Apple", active: true,  age: 20 },
    { id: 2, username: "Banana", active: false, age: 35 },
    { id: 3, username: "Ear", active: false, age: 60 },
    { id: 4, username: "Dog", active: true,  age: 65 },
    { id: 5, username: "Cat", active: true,  age: 80 },
    { id: 6, username: "Ear", active: true,  age: 95 },
  ];
  
  // write code to get an array of all users that have the username "Ear"

  users.filter(user => user.username == 'Ear')
  
  // write code to get an array of all users with an age of 60 or over

  users.filter(user => user.age >= 60 )
  
  // write code to get an array of all ids in users

  users.map(user => user.id)
  
  // write a function that calculate the average age of all users 

  let ages = users.map(user => user.age)

  let calcAvgAge = arr => {    
    let sum = arr.reduce((total, currVal) => total + currVal)

    return sum / arr.length
  }

  console.log(calcAvgAge(ages));
  
  // sort the users by username in ascending order
  
  var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
  ];

  words = words.map(word => word.toLowerCase())

  words.sort()
  
  // console log each word in words in uppercase excluding the first word

  words.forEach(word => {
      console.log(
         word.charAt(0) + word.substring(1).toUpperCase()
      );
  })
  
  // write code to count the number of words with more than 5 letters 

  console.log(
    words
    .map(word => word.length)
    .filter(wordLen => wordLen > 5).length
  );
  

  
  // get an array of words with each word's first character capitalize (just the first character of each string)

  words.map(word => word.charAt(0).toUpperCase() + word.substring(1))
  