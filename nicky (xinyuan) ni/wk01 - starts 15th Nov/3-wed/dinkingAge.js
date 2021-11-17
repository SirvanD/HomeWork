var age = Number(process.argv[2]);
var drinkingAge = Number(18);

if (age < drinkingAge){
    console.log('you cannot drink')
} else {
    console.log('you can drink')
}
