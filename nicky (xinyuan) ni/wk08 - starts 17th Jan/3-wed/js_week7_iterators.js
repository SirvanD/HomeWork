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
  var result1 = users.filter(user => user['username'] == "Ear");
  console.log(result1);
  
  // write code to get an array of all users with an age of 60 or over
  var result2 = users.filter(user => user['age'] > 60);
  console.log(result2);
  
  // write code to get an array of all ids in users
  var idArray = [];
  for(var index = 0; index < users.length; index ++){
      idArray.push(users[index]['id']);
    }
  console.log(idArray);
  
  // write a function that calculate the average age of all users 
  var ageTotal = 0;
  for(var index = 0; index < users.length; index ++){
      ageTotal = ageTotal + users[index]['age']
    }
  console.log(ageTotal/users.length);
  
  // sort the users by username in ascending order

  function age( a, b ) {
        if ( a.age < b.age ){
           return -1;
        } else if ( a.age > b.age ){
           return 1;
        } else{
           return 0;
        }
    }
  console.log(users.sort(age));


  var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
  ];
  
  // console log each word in words in uppercase excluding the first word
  var upArray = [];
  for(var index = 0; index < words.length; index ++){
      var upWord = words[index].toUpperCase()
       upArray.push(upWord)
    }
  upArray.shift();
  upArray.unshift(words[0])
  console.log(upArray);

  // write code to count the number of words with more than 5 letters 
  var newArray = [];
  for(var index = 0; index < words.length; index ++){
        if(words[index].split("").length > 5){
            newArray.push(words[index]);
        }
   }
  console.log(newArray);
  
  // get an array of words with each word's first character capitalize (just the first character of each string)
  var capArray = [];
  for(var index = 0; index < words.length; index ++){
      var letters = words[index].split("")
      var firstLetter = letters[0].toUpperCase();
      letters.shift();
      letters.unshift(firstLetter);
      upWord = letters.join('')
      capArray.push(upWord)
    }
    console.log(capArray);
