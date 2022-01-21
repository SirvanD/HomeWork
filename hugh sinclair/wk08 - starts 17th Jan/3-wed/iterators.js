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

  users.filter(user => user.username == "Ear")
  
  // write code to get an array of all users with an age of 60 or over
  
  users.filter(user => user.age >= 60 )

  // write code to get an array of all ids in users

  users.map( user => user.id )
  
  // write a function that calculate the average age of all users 
  
  const avgAge = usersArr => { 
        return usersArr
                    .map( user => user.age )
                    .reduce((totalAge, currentAge) => (totalAge + currentAge)) / usersArr.length
        
  }

  // sort the users by username in ascending order

users.sort( (userA, userB) => userA.username.localeCompare(userB.username))


//  ask dt how this works 

//   users.sort( (a, b) => {
//       if (a.username < b.username){
//           return -1
//       } else if ( a.username > b.username ){
//           return 1
//       } else {
//           return 0
//       }  
//   })

  
  var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
  ];
  
  // console log each word in words in uppercase excluding the first word
  
    [apple, ...rest] = words

    rest.forEach( word => console.log(word.toUpperCase()))
    

  // write code to count the number of words with more than 5 letters 
  


  words.filter(word => word.length >5)




  // different way
  const overFiveLetters = word => {
        if (word.length > 5){
            return 1
        } else {
            return 0
        }
  }

  words.reduce( (overFiveLetters(), 0 ))


  // get an array of words with each word's first character capitalize (just the first character of each string)



  // could destructure etc get the first letter, then the rest, make first letter to upper case

// could just be a foreach i guess
  words.map(word => {
    wordArr = word.split('')
    wordArr[0] = wordArr[0].toUpperCase()
    return wordArr.join('')
  })




