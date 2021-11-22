// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// var noun = 'goose';
// var number = 7;

function pluralize(number, noun) {
    var noun = 'goose';
    var number = 7;
    if (noun == 'goose' && number > 1) {
        console.log(number + ' geese') 
    } else if (number > 1){
    console.log(number + ' ' + noun + 's');
    } else {
        console.log(number + ' ' + noun);
    }
}