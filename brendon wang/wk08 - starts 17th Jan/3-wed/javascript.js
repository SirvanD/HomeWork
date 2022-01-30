// using for, forEach, map, filter, sort, reduce

var users = [
    { id: 1, username: "Apple", active: true, age: 20 },
    { id: 2, username: "Banana", active: false, age: 35 },
    { id: 3, username: "Ear", active: false, age: 60 },
    { id: 4, username: "Dog", active: true, age: 65 },
    { id: 5, username: "Cat", active: true, age: 80 },
    { id: 6, username: "Ear", active: true, age: 95 },
];

// write code to get an array of all users that have the username "Ear"
var answer1 = users
    .filter(obj => obj.username == "Ear")

console.log(answer1)

// write code to get an array of all users with an age of 60 or over
var answer2 = users
    .filter(obj => obj.age > 60)

console.log(answer2)

// write code to get an array of all ids in users
var answer3 = users
    .map(obj => obj.id)

console.log(answer3)

// write a function that calculate the average age of all users 
var answer4 = users
    .map(obj => obj.age)
    .reduce((accum, age) => { return accum + age }, 0)

console.log(answer4)

// sort the users by username in ascending order
var answer5 = users
    .map(obj => obj.username)
    .sort()

console.log(answer5)


var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
];

// console log each word in words in uppercase excluding the first word

for (let i = 1; i < words.length; i++) {
    console.log(words[i].toUpperCase())
}

// write code to count the number of words with more than 5 letters 


var counter = words
    .filter(word => word.length > 5)
    .length

console.log(counter)

// get an array of words with each word's first character capitalize (just the first character of each string)

var capatalised = words
    .map(word => word[0].toUpperCase() + word.slice(1))

console.log(capatalised)
