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
users.filter(user => user.username == "Ear")
// write code to get an array of all users with an age of 60 or over
users.filter(user => user.age >= 60)
// write code to get an array of all ids in users
users.map(user => user.id)
// write a function that calculate the average age of all users 
var averageAge = arr => {
    return arr.map(user => user.age)
        .reduce((accum, num) => (accum + num), 0) / arr.length
}
averageAge(users)
// sort the users by username in ascending order

var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
];
//penpineappleapplepen right hahaha?

// console log each word in words in uppercase excluding the first word

words.filter(word => word != words[0])
    .map(word => console.log(word.toUpperCase()))
// write code to count the number of words with more than 5 letters 
words.filter(word => word.length > 5).length
// get an array of words with each word's first character capitalize (just the first character of each string)
words.map(word => {
    var temp = word[0].toUpperCase()
    for (let i = 1; i < word.length; i++) {
        temp += word[i]
    }
    return temp
})
// below works too
words.map(word => {
    var temp = word.split("")
    temp.shift()
    return temp.reduce((accum, letter) => accum + letter, word[0].toUpperCase())
})

