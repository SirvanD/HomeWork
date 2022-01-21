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
    users.filter(user => user.username == 'Ear');
  
  // write code to get an array of all users with an age of 60 or over
    users.filter(user => user.age >= 60);
  
  // write code to get an array of all ids in users
    users.map(user => user.id);
  
  // write a function that calculate the average age of all users 
    const sum = (prevValue, currentValue) => prevValue + currentValue;

    users.map(user => user.age)
        .reduce(sum); 
  
  // sort the users by username in ascending order
    users.sort( (a, b) => {
        if (a.username < b.username){
            return -1 // moves index -1 position
        } else if ( a.username > b.username ){
            return 1
        } else {
            return 0
        }  
    })
 
    var words = ["apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"];
  
  // console log each word in words in uppercase excluding the first word
    var [firstWord, ...remainingWords] = words;
    remainingWords.forEach(word => console.log(word.toUpperCase()));
  
  // write code to count the number of words with more than 5 letters 
    let greaterThan5 = words.filter(word => word.length > 5);
    console.log(greaterThan5.length);
  
  // get an array of words with each word's first character capitalize (just the first character of each string)
    var capitalizedWords = [];
    words.forEach(word => {
        let splitWord = []
        splitWord.push(word.charAt(0).toUpperCase());
        splitWord.push(word.substring(1));
        capitalizedWords.push(splitWord.join(''));
        }
    )
    console.log(capitalizedWords)
  