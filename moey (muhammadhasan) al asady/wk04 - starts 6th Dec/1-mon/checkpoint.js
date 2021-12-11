// # checkpoint 1b

// # 1. Vowel Count - 5 points

// write a vowelCount function that **returns** the number of occurrences of vowels in a word.
// Vowels are `a`, `e`, `i`, `o`, `u`

// say for example the word "Spaghettification". your function should tell me there are 7 vowels

// ```javascript
// var vowels = ["a", "e", "i", "o", "u"];

// function vowelCount(str) {
    
//     var counter = 0;
//     for(let i = 0; i < str.length; i++){
//         if (vowels.includes(str[i]) == true){ 
//             counter++
//         }
//     }
//     return counter

//    }

   

// vowelCount('Spaghettification') // => 7
// vowelCount('HELLO') // => 2
// vowelCount('cake pudding') // => 4
// ```

// # 2. Grandma returns - 6 points

// last time you spoke to lovely grandma https://gist.github.com/epoch/2e45ffe2dbf50cf1cea2466265f22291

// you can start from scratch or continue where you left off.

// > no dom UI necessary for this exercise. follow the instructions and use prompts, alerts and loops

// 1. Whatever you say to grandma (whatever you type in), she should respond with `HUH?! SPEAK UP, SONNY!`. To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.

// You can't stop talking to grandma until you shout BYE.

// 2. What if grandma doesn't want you to leave? When you shout BYE, she could pretend not to hear you. 
// Change your previous program so that you have to shout BYE three times in a row. Make sure to test your program: if you shout BYE three times, but not in a row, you should still be talking to grandma.
// var counter = 0;

// while (counter !== 3){
//   var input1 = prompt('Enter anything');
//     if (input1 === input1.toUpperCase()) {
//         console.log('NO, NOT SINCE 1938!')
//        counter = 0;
//       } else if (input1 === 'bye'){
//       console.log('')
//       counter++
//     }
//     else  {
//         console.log('HUH?! SPEAK UP, SONNY!')
//         //  counter = 0;
//       } 

 var counter = 0;

while (counter !== 3){
   var input1 = prompt('Enter anything');
  if (input1 === 'BYE'){
      console.log('')
      counter++
    } else if (input1 === input1.toUpperCase()) {
        console.log(`NO, NOT SINCE ${Math.floor(Math.random() * (1950 - 1930 + 1) + 1930)}!`)
       counter = 0;
    } else  {
        console.log('HUH?! SPEAK UP, SONNY!')
         counter = 0;
        }  
      }


// & input2!= 'BYE' && input3 != 'BYE')

// # 3. Lord buckethead - 2 points

// ```javascript
// var users = {
//   theresa: {
//     party: "Conserative",
//     favoriteNumbers: [12, 42, 75]
//   },
//   Lord_Buckethead: {
//     party: "Gremloids",
//     favoriteNumbers: [8, 12, 24, 9]
//   },
//   mr_fishfinger: {
//     party: "Independent",
//     favoriteNumbers: [12, 14, 85, 99, 1001]
//   }
// }
// // ```
// // 1. How would you access theresa's party (i.e. the string "Conservative")?  
// users["theresa"]["party"]
// // 2. How would you access Lord Buckethead's party (i.e. the string "Gremloids")?  
// users["Lord_Buckethead"]["party"]
// // 3. How would you change mr fishfinger's party to "birds eye"?  
// users["mr_fishfinger"]["party"] = "birdseye"
