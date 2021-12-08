// 1. Vowel Count
// write a vowelCount function that returns the number of occurrences of vowels in a word. Vowels are a, e, i, o, u

// say for example the word "Spaghettification". your function should tell me there are 7 vowels

// vowelCount('Spaghettification') // => 7
// vowelCount('HELLO') // => 2
// vowelCount('cake pudding') // => 4

// function vowelCount(str) {
//   let vowelNum = 0;
//   let string = str.toString();
//   for (i = 0; i < string.length; i++) {
//     if (
//       string.charAt(i) == "a" ||
//       string.charAt(i) == "e" ||
//       string.charAt(i) == "i" ||
//       string.charAt(i) == "o" ||
//       string.charAt(i) == "u"
//     ) {
//       vowelNum += 1;
//     }
//   }
//   return vowelNum;
// }
// vowelCount("parisa")

// 2. Grandma returns
// last time you spoke to lovely grandma https://gist.github.com/epoch/2e45ffe2dbf50cf1cea2466265f22291

// you can start from scratch or continue where you left off.

// no dom UI necessary for this exercise. follow the instructions and use prompts, alerts and loops

// Whatever you say to grandma (whatever you type in), she should respond with HUH?! SPEAK UP, SONNY!.
// To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.
// You can't stop talking to grandma until you shout BYE.
// What if grandma doesn't want you to leave? When you shout BYE, she could pretend not to hear you. Change your previous program so that you have to shout BYE three times in a row. Make sure to test your program: if you shout BYE three times, but not in a row, you should still be talking to grandma.

// let userInput = prompt("text");
// let randNum = Math.floor(Math.random() * (1950 - 1930 + 1) + 1930);

// while () {
//   if (userInput !== "BYE") {
//   userInput = prompt("text");
//   alert("HUH?! SPEAK UP, SONNY!");
//   if ((userInput = prompt())) {
//     alert(randNum);
//   }
// }
// alert("BYE SONNY");

// let userArray = [];
// let byeArray = ["BYE", "BYE", "BYE"];

// function randomNumberFunc() {
//   return Math.floor(Math.random() * (1950 - 1930 + 1) + 1930);
// }

// function arrayCompare() {
//   if (
//     userArray[0] == byeArray[0] &&
//     userArray[1] == byeArray[1] &&
//     userArray[2] == byeArray[2]
//   ) {
//     return true;
//   }
//   return false;
// }

// function grandma() {
//   let message = prompt("Speak to Grandma here !");

//   while (true) {
//     if (message !== message.toUpperCase()) {
//       message = prompt("Talk in capitals !");
//       userArray = []; //added to fix the bug- empty array after inputting small case string
//     } else if (message !== "BYE") {
//       alert("NO, NOT SINCE " + randomNumberFunc());
//       message = prompt("Talk louder !");
//       userArray = [];
//     } else if (message == "BYE") {
//       userArray.push("BYE");
//       if (arrayCompare()) {
//         alert("Bye if you insist!!!!!!!!!");
//         break;
//       }
//       alert("Not too soon!");
//       message = prompt("Come again !");
//     }
//   }
// }
// grandma();

let userInput = prompt("text");
let countBye = 0;
while (countBye < 3) {
  if (userInput !== "BYE") {
    countBye = 0;
    alert("SPEAK UP SONNY");
    userInput = prompt("text");
  } else if (userInput === "BYE") {
    countBye++;
    userInput = prompt("text");
  }
}
alert("bye");

//    3. Lord buckethead

// var users = {
//   theresa: {
//     party: "Conserative",
//     favoriteNumbers: [12, 42, 75],
//   },
//   Lord_Buckethead: {
//     party: "Gremloids",
//     favoriteNumbers: [8, 12, 24, 9],
//   },
//   mr_fishfinger: {
//     party: "Independent",
//     favoriteNumbers: [12, 14, 85, 99, 1001],
//   },
// };
//    How would you access theresa's party (i.e. the string "Conservative")?
// consloe.log(users.theresa.party);

//    How would you access Lord Buckethead's party (i.e. the string "Gremloids")?
// console.log(users.Lord_Buckethead.party);

//    How would you change mr fishfinger's party to "birds eye"?

// console.log((users.mr_fishfinger.party = "birds eye"));
