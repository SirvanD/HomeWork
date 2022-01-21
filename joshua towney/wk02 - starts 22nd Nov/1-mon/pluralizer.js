// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// var noun = 'goose';
// var number = 7; these are not needed as tey will  be populated by user input when function is called.

function pluralize(number, noun) {
    // var noun = 'goose'; these lines are not needed
    // var number = 7; these lines are not needed
    if (noun == 'goose' && number > 1) {
        return number + ' geese';
    } else if (number > 1){
    return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}