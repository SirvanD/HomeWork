var users = [
  { id: 1, username: "Apple", active: true, age: 20 },
  { id: 2, username: "Banana", active: false, age: 35 },
  { id: 3, username: "Ear", active: false, age: 60 },
  { id: 4, username: "Dog", active: true, age: 65 },
  { id: 5, username: "Cat", active: true, age: 80 },
  { id: 6, username: "Ear", active: true, age: 95 },
];

// write code to get an array of all users that have the username "Ear"

const usersWithEar = users.filter((user) => user.username == "Ear");
console.log(usersWithEar);

// write code to get an array of all users with an age of 60 or over

const ageOverSixty = users.filter((user) => user.age > 60);

console.log("ageOverSixty", ageOverSixty);

// write a function that calculate the average age of all users

const avarageAge = (usersAge) =>
  users.reduce((total, userAge) => total + userAge.age / usersAge.length, 0);
console.log(avarageAge);

//sort the users by username in ascending order

const sortedUsers = users.sort((a, b) => {
  if (a.username <= b.username) {
    return -1;
  } else {
    return 1;
  }
});
console.log("sortedUsers", sortedUsers);

var words = [
  "apple",
  "banana",
  "cat",
  "cake pudding",
  "Dog",
  "ear",
  "flower",
  "flower",
  "goat",
  "Halloween",
  "cakepudding",
  "penapplepineapplepen",
];

// console log each word in words in uppercase excluding the first word

const uppercaseWords = words
  .filter((word) => word != "apple")
  .map((word) => word.toLocaleUpperCase());
console.log(uppercaseWords);

// // write code to count the number of words with more than 5 letters

const longWords = words.filter((word) => word.length > 5);
console.log(longWords.length);

// // get an array of words with each word's first character capitalize (just the first character of each string)

const capitalFirstLetter = words.map((word) => word.charAt(0).toUpperCase());
