var dogs = ['boxer','dalmation','german shephard','beagle','pitbull'];
var adoptedDog = dogs[Math.floor(Math.random() * dogs.length)];

// if (adoptedDog == dogs[1]) {
//     console.log("DALMATION");
// } else {
// console.log(adoptedDog);
// }

var counter = 1;
var breedArray = dogs[0];

while (counter < 6) {
    console.log("My #" + counter + " type of dog is a " + breedArray);
    breedArray = dogs[counter];
    counter = counter + 1;
}


// /Users/joshuatowney/sei/sei_homework/joshua towney/wk01 - starts 15th Nov/5-fri