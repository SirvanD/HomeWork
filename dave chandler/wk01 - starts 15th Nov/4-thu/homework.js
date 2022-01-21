//QUESTION 1
console.log('\nQuestion 1:');

let counter = 0;
while (counter <= 20){
    if (counter % 2 == 0) {
        console.log(`${counter} is even`);
    } else {
        console.log(`${counter} is odd`);
    }
    counter++;
} 

//QUESTION 2 - reusing counter variable
console.log('\nQuestion 2:');

counter = 0;
while (counter <= 10){
    console.log(`${counter} x 9 is ${counter*9}`);
    counter++;
} 

//QUESTION 3 - reusing counter variable
console.log('\nQuestion 3: wrapped in the bonus question code too');

counter = 0;
const myChoices = ['red','orange','yellow','green','blue'];
const bonusChoices = ['st','nd','rd','th','th'];
const showBonusChoices = true;

while (counter < myChoices.length){
    if(!showBonusChoices){
        console.log(`My #${counter+1} choice is ${myChoices[counter]}`);
    } else {
        console.log(`My ${counter+1 + bonusChoices[counter]} choice`);
    }
    counter++;
} 

//QUESTION 4 - bonus homework
console.log('\nQuestion 4: Answers - will print 6,7,8,9,10');

//below is how i would format
var number = 5;

while (number < 10) {
    number = number + 1;
    if (true) {
        console.log(number);
    }
}
console.log('stopping at ' + number + ', bye!');

//QUESTION 4 - bonus homework, last part
console.log('\nQuestion 4: last part, keep line 10, change anything else');

var number = 9;
while(number < 10){
    number = number + 1;
    if (number ==10) {
        console.log('ending at 10, bye'); 
        break;
    } else {
        console.log('stopping at ' + number + ', bye!');
    }
} 