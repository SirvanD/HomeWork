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

const answer1 = users.filter(word => word.username == "Ear")



// write code to get an array of all users with an age of 60 or over
const answer2 = users.filter(user => user.age > 60)


// write code to get an array of all ids in users

var userIdArray = []
users.forEach(user => {
    userIdArray.push(user.id)
});
console.log(userIdArray);


// write a function that calculate the average age of all users 
let usersAge = []

function averageAge() {
    var totalAge = 0
    const ageArray = users.map(user => user.age)

    ageArray.forEach(age => {
        totalAge += age
    });
    return totalAge / ageArray.length
}


// sort the users by username in ascending order

const sortedUsers = users.sort((a, b) => {
    if (a.username > b.username) {
        return 1
    } else if (b.username > a.username) {
        return -1
    } else {
        return 0
    }
});





var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
];

// console log each word in words in uppercase excluding the first word
const upperCaseArray = []
words.forEach(word => {
    const digestUpper = word.toUpperCase()

    console.log(final);
    // const firstLower = digestUpper[1].toLowerCase()

    // console.log(`${firstLower}${final}`)
});

// write code to count the number of words with more than 5 letters 

// get an array of words with each word's first character capitalize (just the first character of each string)