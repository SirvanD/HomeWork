var users = [
    { id: 1, username: "Apple", active: true,  age: 20 },
    { id: 2, username: "Banana", active: false, age: 35 },
    { id: 3, username: "Ear", active: false, age: 60 },
    { id: 4, username: "Dog", active: true,  age: 65 },
    { id: 5, username: "Cat", active: true,  age: 80 },
    { id: 6, username: "Ear", active: true,  age: 95 },
];

// write code to get an array of all users that have the username "Ear"
let surnameEar = users.filter(user => user.username === "Ear");
console.log(surnameEar);

// write code to get an array of all users with an age of 60 or over
let sixtyOrOlder = users.filter(user => user.age >= 60);
console.log(sixtyOrOlder);

// write code to get an array of all ids in users
let userIds = users.map(user => user.id);
console.log(userIds);

// write a function that calculate the average age of all users 
function calculateAverageAge(users) {
    return users
        .map(user => user.age)
        .reduce((total, age) => total + age, 0) / users.length;
}
calculateAverageAge(users)

// sort the users by username in ascending order 
let ascOrderedUsernames = users
    .sort((a, b) => {
        if (a.username > b.username) {
            return 1;
        } else if (a.username < b.username) {
            return -1;
        } else {
            return 0;
        }
    });
console.log(ascOrderedUsernames)

var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
];

// console log each word in words in uppercase excluding the first word 
let [first, ...restOfWords] = words;
let upperCaseWords = restOfWords
    .map(word => word.toUpperCase())
    .forEach(upperCaseWord => console.log(upperCaseWord));


// write code to count the number of words with more than 5 letters 

// Hey Daniel & Dean, just fyi this code does count spaces in the letter count as well - not sure if that's ok or not. It doesn't really affect the question at all because the only word with a space is much longer than 5 letters anyway, but happy to revise if necessary :)
let over5LettersCounter = words
    .map(word => word.length)
    .filter(length => length > 5).length;
console.log(over5LettersCounter);

// get an array of words with each word's first character capitalize (just the first character of each string)
let capitalisedWords = words
    .map(word => word[0].toUpperCase() + word.slice(1));
console.log(capitalisedWords);
