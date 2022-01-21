// using for, forEach, map, filter, sort, reduce

var users = [
  { id: 1, username: "Apple", active: true, age: 20 },
  { id: 2, username: "Banana", active: false, age: 35 },
  { id: 3, username: "Ear", active: false, age: 60 },
  { id: 4, username: "Dog", active: true, age: 65 },
  { id: 5, username: "Cat", active: true, age: 80 },
  { id: 6, username: "Ear", active: true, age: 95 },
];

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

// write code to get an array of all users that have the username "Ear"

const earUsernames = users.filter((user) =>
  user.username == "Ear" ? user : false
);
console.log(earUsernames);

// write code to get an array of all users with an age of 60 or over
const ageOver60 = users.filter((user) => (user.age >= 60 ? user : false));
console.log(ageOver60);

// write a function that calculate the average age of all users
const averageAge = (arrInput) =>
  arrInput.reduce(
    (total, currentUser) => total + currentUser.age / arrInput.length,
    0
  );

console.log(averageAge(users));

// sort the users by username in ascending order
const sortedUsers = users.sort((a, b) =>
  a.username >= b.username ? +1 : b.username <= b.username ? -1 : 0
);
console.log(sortedUsers);

// console log each word in words in uppercase excluding the first word
const uppercaseFilteredWords = words
  .filter((word) => word != "apple")
  .map((word) => word.toUpperCase());

console.log(uppercaseFilteredWords);

// write code to count the number of words with more than 5 letters
const longWords = words.filter((word) => word.length > 5);
console.log(longWords.length);

// get an array of words with each word's first character capitalize (just the first character of each string)

//not quite sure what the question is asking for so will do both variants

//version 1 - to capitalize each word
const capitalized = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);

console.log(capitalized);

//version 2 - find the capitalized words
const isCapitalized = words.filter((word) =>
  word.charAt(0) == word.charAt(0).toUpperCase() ? word : false
);

console.log(isCapitalized);
