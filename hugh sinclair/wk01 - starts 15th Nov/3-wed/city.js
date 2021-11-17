//Create a program name city.js. allow the user to provide a city
//Depending on the answer, print an appropriate response of your choosing

var city = process.argv[2];

if (city == 'Melbourne') {
    console.log(`Nice, grab some coffee and black clothes!`);
}else if (city == 'Brisbane'){
    console.log(`Nice, soak up the sun!`);
}else if (city == 'Adelaide'){
    console.log(`Nice, better get to the shops before they close!`);
}else if (city == 'Sydney'){
    console.log(`Nice, head to a seafood restaurant!`);
}else if (city == 'Perth'){
    console.log(`Nice, better get some sunscreen and a decent aircon!`);
}else if (city == 'Canberra'){
    console.log(`Nice, I hope you like roundabouts!`);
}else if (city == 'Hobart'){
    console.log(`Nice, get that fresh air!`);
}else if (city == 'GoldCoast'){
    console.log(`Nice, hit those beaches!`)
}else {
    console.log(`Sorry, I can't type any more cities`);
}