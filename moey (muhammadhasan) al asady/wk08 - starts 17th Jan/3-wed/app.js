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
const filtered = users.filter((user) => 
    user.username == "Ear" ? user: false
)

console.log(filtered)

  
  // write code to get an array of all users with an age of 60 or over

const over60 = users.filter((user) => 
user.age >= 60 ? user: false
)

console.log(over60)  
  // write code to get an array of all ids in users
  const userId = users.map(user => user.id);
  console.log(userId)

  
  // write a function that calculate the average age of all users 
  const userAges = users.map(user => user.age);

  const addAges = (age, total) => age + total;
  console.log(userAges.reduce(addAges));


  
  // sort the users by username in ascending order
  const names = users.map(user => user.username);
  names.sort()



  var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
  ];
  
  // console log each word in words in uppercase excluding the first word
  words.forEach(word => {
      word = word.toUpperCase() 
        if (word == "apple".toUpperCase()){
            word = "apple".toLowerCase()
        }
    console.log(word);
  });
  
  // write code to count the number of words with more than 5 letters 
  words.forEach(word => {
      if (word.length > 5){
          console.log(word.length)
      }
});
  
  // get an array of words with each word's first character capitalize (just the first character of each string)
//   const firstLetter = words.map(word => {
//       if (word[0] == word[0].toLowerCase()){
//           word = word[0].toUpperCase
//           console.log(word)
//       }
//   });
//   console.log(firstLetter)

const firstLetter = words.map(word => {
   upperCase =  word.charAt(0).toUpperCase() + word.slice(1);
console.log(upperCase);
    
});


