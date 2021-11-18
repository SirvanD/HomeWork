// var topChoices = ["blue", "pink", "purple", "yellow", "green"];

// let i = 0;
// while (i < topChoices.length) {
//   console.log(`My #${i + 1} choice is : ${topChoices[i]}`);
//   i++;
// }

let i = 0;
var topChoices = ["blue", "pink", "purple", "yellow", "green"];

while (i < topChoices.length) {
  if (i == 0) {
    console.log(`My ${i + 1}st choice is ${topChoices[i]}`);
  } else if (i == 1) {
    console.log(`My ${i + 1}nd choice is ${topChoices[i]}`);
  } else if (i == 2) {
    console.log(`My ${i + 1}rd choice is ${topChoices[i]}`);
  } else {
    console.log(`My ${i + 1}th choice is : ${topChoices[i]}`);
  }

  i++;
}
