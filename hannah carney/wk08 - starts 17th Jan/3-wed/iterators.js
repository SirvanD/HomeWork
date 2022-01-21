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

    users.filter(item => item.username === 'Ear')

  // write code to get an array of all users with an age of 60 or over
  users.filter(item => item.age >= 60)
  
  // write code to get an array of all ids in users
  users.map(user => user.id);

  // write a function that calculate the average age of all users 

    function calculateAverage(users){
        return users
        .reduce((previous, user) => previous + user.age, 0) / users.length      
    }

  // sort the users by username in ascending order
  
  users.sort(function(a, b) {
    var nameNum1 = a.username.toUpperCase(); 
    var nameNum2 = b.username.toUpperCase();
    if (nameNum1 < nameNum2) {
      return -1;
    }
    if (nameNum1 > nameNum2) {
      return 1;
    }
  
    return 0;
  });


  var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
  ];

  
  // console log each word in words in uppercase excluding the first word
  var [first, ...theRestOfFruits] = words
  console.log(theRestOfFruits.map(word => word.toUpperCase()))
  
  // write code to count the number of words with more than 5 letters 
  console.log(words.filter(word => word.length > 5))
  
  // get an array of words with each word's first character capitalize (just the first character of each string)
  
  words.map(word => word.charAt(0).toUpperCase() + word.substr(1) );