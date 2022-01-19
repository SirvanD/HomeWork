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
users.filter(user => user.username === "Ear")
  
// write code to get an array of all users with an age of 60 or over
users.filter(user => user.age >= 60)

  
// write code to get an array of all ids in users
users.map(user => user.id)

// write a function that calculate the average age of all users
const ageCalculator = () => {
    let averageAge = users
        .map(user => user.age)
        .reduce((total, age) => total + age) / users.length
    return averageAge
}

ageCalculator(); // => 59.16

// sort the users by username in ascending order
users.sort((user1, user2) => user1.username.localeCompare(user2.username));

var words = [
"apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
];

// console log each word in words in uppercase excluding the first word
for (let i = 1; i < words.length; i++) {
    console.log(words[i].toUpperCase())
}

// write code to count the number of words with more than 5 letters
words.filter(word => word.length > 5).length;

// get an array of words with each word's first character capitalize (just the first character of each string)

// If this means you only want the first character as a capital?
console.log(
    words.map(word => word[0].toUpperCase())
)

// Or if you want the full string but first letter capitalised?
function capitalise(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

let wordsArray = []

words.forEach(word => {
    let fixedWord = word.split(' ').map(capitalise).join(' ')
    wordsArray.push(fixedWord);
})

console.log(wordsArray);