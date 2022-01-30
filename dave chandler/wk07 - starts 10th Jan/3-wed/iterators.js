var users = [
  { id: 1, username: "Apple", active: true, age: 20 },
  { id: 2, username: "Banana", active: false, age: 35 },
  { id: 3, username: "Ear", active: false, age: 60 },
  { id: 4, username: "Dog", active: true, age: 65 },
  { id: 5, username: "Cat", active: true, age: 80 },
  { id: 6, username: "Ear", active: true, age: 95 },
];

let nums = [1, 2, 3, 4, 3, 5, 2, 6, 1];

// write code to get an array of all users that have the username "Ear"
let q1 = users.filter((user) => user.name === "Ear");

// write code to get an array of all users with an age of 60 or over
let q2 = users.filter((user) => user.age >= 60);

// write code to get an array of all ids in users
let q3 = users.map(({ id }) => id);

// write a function that calculate the average age of all users - gone for readability
function avgAge(users) {
  let numUsers = users.length;
  let sumAges = users.reduce((total, user) => total + user.age, 0);
  return (sumAges / numUsers).toFixed(1);
}

// sort the users by username in ascending order
let q5 = users.sort((a, b) => (a.username < b.username ? -1 : a.username > b.username ? 1 : 0));

var words = [
  "apple",
  "banana",
  "cat",
  "chocoloate cake pudding",
  "Dog",
  "ear",
  "flower",
  "flowers are super pretty",
  "goat",
  "Halloween",
  "cakepudding",
  "penapplepineapplepen",
];

//Tests
console.log(q1);
console.log(q2);
console.log(q3);
console.log(avgAge(users));
console.log(q5);

// console log each word in words in uppercase excluding the first word
words.forEach((word, index) => (index != 0 ? console.log(word.toUpperCase()) : console.log(word)));

// write code to count the number of words with more than 5 letters
let q7 = words.filter((word) => word.length > 5).length;
console.log(q7);

//this capitalises each word EVEN if there are multiple words in a single array element.
function titleCase(words) {
  for (i = 0; i < words.length; i++) {
    console.log(
      words[i]
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
        .join(" ")
    );
  }
}

titleCase(words);
