var userInput = prompt("Say something to Grandma! ");
const year = [];

let num = 1930;
let i = 0;

function fillYearArray() {
  while (num <= 1950) {
    year[i] = num;
    i++;
    num++;
  }
  console.log(year);
}

fillYearArray();

randomYear = year[Math.floor(Math.random() * 21)];

function isUpperCase(text) {
  if (text === text.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

let countBye;
if (userInput == "BYE") {
  countBye = 1;
} else {
  countBye = 0;
}

while (countBye != 3) {
  randomYear = year[Math.floor(Math.random() * 21)];
  if (isUpperCase(userInput)) {
    alert(`No, NOT SINCE ${randomYear}!`);
  } else {
    alert("HUH?! SPEAK UP, SONNY");
  }
  userInput = prompt("Say something to Grandma! ");
  if (userInput == "BYE") {
    countBye++;
  } else {
    countBye = 0;
  }
}
alert("BYE BYE SONNY");
