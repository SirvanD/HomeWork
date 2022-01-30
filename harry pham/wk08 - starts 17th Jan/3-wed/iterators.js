var users = [
    { id: 1, username: "Apple", active: true,  age: 20 },
    { id: 2, username: "Banana", active: false, age: 35 },
    { id: 3, username: "Ear", active: false, age: 60 },
    { id: 4, username: "Dog", active: true,  age: 65 },
    { id: 5, username: "Cat", active: true,  age: 80 },
    { id: 6, username: "Ear", active: true,  age: 95 },
  ];

// write code to get an array of all users that have the username "Ear"
// let usernames = users.filter(user => user.username === 'Ear')
// console.log(usernames)

// write code to get an array of all users with an age of 60 or over
// let usersAbove60 = users.filter(user => user.age >= 60)
// console.log(usersAbove60)

// write code to get an array of all ids in users
// let userIds = users.map(user => user.id)
// console.log(userIds)

// write a function that calculate the average age of all users 
// let userAge = users.map(user => user.age)
// console.log(userAge)
// let userAverageAge = userAge.reduce((total, num) => {
//     return total + num
// }, 0)
// console.log(userAverageAge)

// sort the users by username in ascending order
// let usernames = users.map(user => user.username)
// console.log(usernames.sort())

var words = [
  "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
];

// console log each word in words in uppercase excluding the first word
words.forEach(word => {
    let wordSplit = word.split(' ')
    if(wordSplit[1] !== undefined) {
        wordSplit[0] = wordSplit[0].toLowerCase()
        wordSplit[1] =  wordSplit[1].toUpperCase()
    } else {
        wordSplit[0] = wordSplit[0].toLowerCase()
    }
    console.log(wordSplit.join(' '))
    
})
// const newArr = words.map(word => )
// console.log(newArr)

// write code to count the number of words with more than 5 letters 
// let counter = 0
// words.forEach(word => {
//     if(word.length >= 5) {
//         counter++
//     }
// })
// console.log(counter)


// get an array of words with each word's first character capitalize (just the first character of each string)
// const firstLetterOfWords = words.map(word => word[0].toUpperCase() + word.slice(1))
// console.log(firstLetterOfWords)
