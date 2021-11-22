var fruits = ["apple", "cherry", "melon", "kiwi", "banana"];

var randomIndex = Math.floor(Math.random() * fruits.length);

randomFruit = fruits[randomIndex];

len = randomFruit.length;
start = randomFruit[0];
end = randomFruit[randomFruit.length - 1];

alert(
  `Guess the fruit , it has ${len} characters , it starts with ${start} and finish with ${end}`
);

guessed = "no";
attempt = 1;
var answer = prompt("Make your guess");
while (guessed === "no") {
  if (answer == randomFruit) {
    guessed = "yes";
    alert(`CONGRATULATIONS! you have guessed the fruit in ${attempt} attempts`);
  } else {
    answer = prompt("Wrong guess, try again!");
    attempt++;
  }
}
