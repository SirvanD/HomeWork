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
console.log(users
    .filter(user => { if (user.username.includes("Ear")) { return user } }))

// write code to get an array of all users with an age of 60 or over
console.log(users.
    filter(user => { if (user.age >= 60) { return user } }))

// write code to get an array of all ids in users
console.log(users.map(user => user.id))

// write a function that calculate the average age of all users 
const averageAge = users => {
    return users.map(user => user.age).reduce((each, total) => each + total) / users.length
}
console.log(averageAge(users))

// sort the users by username in ascending order
console.log(users
    .sort((userA, userB) => (userA.username > userB.username) ? 1 : ((userA.username < userB.username) ? -1 : 0)))


var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
];

// console log each word in words in uppercase excluding the first word
console.log(words
    .filter(word => words.indexOf(word) > 0).map(word => word.toUpperCase())
)
// write code to count the number of words with more than 5 letters 
console.log(words
    .filter(word => word.length > 5).length)

// get an array of words with each word's first character capitalize (just the first character of each string)
console.log(words
    .map(word => word[0].toUpperCase() + word.slice(1)))
