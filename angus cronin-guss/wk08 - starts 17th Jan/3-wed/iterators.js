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
let findUser = users.filter(user => {
    return user.username == 'Ear'
})
  
  // write code to get an array of all users with an age of 60 or over
let ageLimit = users.filter(user => {
    return user.age >= 60
})
  // write code to get an array of all ids in users
var array = []
let userID = users.forEach(user => {
    array.push(user.id)   
})

console.log( array );


  // write a function that calculate the average age of all users 

  let averageAge = users.filter(user => user.age).reduce((total, accum) => total + accum.age, 0) / users.length;
  
  console.log(averageAge);

  // sort the users by username in ascending order
users.sort((a,b) => {
  if (a.username < b.username ) {
    return -1
  }
  
})


  var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
  ];
  
  // console log each word in words in uppercase excluding the first word
  words.forEach( word => {
      word.toUpperCase()
      return word
  })
  // write code to count the number of words with more than 5 letters 
  
  // get an array of words with each word's first character capitalize (just the first character of each string)
  