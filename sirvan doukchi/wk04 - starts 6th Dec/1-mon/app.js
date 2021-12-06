//1.Vowel Count

const vowelArray = ["a", "e", "i", "o", "u"];

function vowelCount(strInpout) {
  let newArray = strInpout.toLowerCase().split("");
  let vowelCounter = 0;
  for (let i = 0; i < newArray.length; i++) {
    //console.log(newArray);
    vowelArray.forEach(function (element) {
      if (newArray[i] == element) {
        vowelCounter++;
        vowelCounter = vowelCounter;
        //console.log(newArray[i])
      }
    });
  }
  console.log(vowelCounter);
}

vowelCount("Spaghettification"); // => 7
vowelCount("HELLO"); // => 2
vowelCount("cake pudding"); // => 4

// 2. Grandma returns

let userArray = [];
let byeArray = ["BYE", "BYE", "BYE"];

function randomNumberFunc() {
  return Math.floor(Math.random() * (1950 - 1930 + 1) + 1930);
}

function handleKeyPress() {
  let message = prompt("Speak to Grandma here !");

  while (true) {
    if (message !== message.toUpperCase()) {
      message = prompt("Talk in capitals !");
    } else if (message !== "BYE") {
      alert("NO, NOT SINCE " + randomNumberFunc());
      message = prompt("Talk louder !");
      userArray = [];
    } else if (message == "BYE") {
      userArray.push("BYE");
      if (arrayCompare()) {
        alert("Bye if you insist!!!!!!!!!");
        break;
      }
      alert("Not too soon!");
      message = prompt("Come again !");
    }
  }
}
handleKeyPress();

function arrayCompare() {
  if (
    userArray[0] == byeArray[0] &&
    userArray[1] == byeArray[1] &&
    userArray[2] == byeArray[2]
  ) {
    return true;
  }
  return false;
}

//3. Lord buckethead - 2 points

var users = {
  theresa: {
    party: "Conserative",
    favoriteNumbers: [12, 42, 75],
  },
  Lord_Buckethead: {
    party: "Gremloids",
    favoriteNumbers: [8, 12, 24, 9],
  },
  mr_fishfinger: {
    party: "Independent",
    favoriteNumbers: [12, 14, 85, 99, 1001],
  },
};

console.log(users.theresa.party); //['party']
console.log(users.Lord_Buckethead.party); //['party']
users.mr_fishfinger["party"] = "birds eye"; //also could do .party
console.log(users.mr_fishfinger.party);
