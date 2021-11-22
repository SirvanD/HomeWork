// Write a function named pluralize that:

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, num1){
    numberOfNoun = Number(num1);
    if (numberOfNoun > 1 && noun == 'goose'){
        return `more than 1 goose makes a gaggle!`;
    } else if (numberOfNoun > 1 && noun == 'crow'){
        return `more than 1 crow makes a murder!`;
    }
    else if (numberOfNoun > 1){
        return `${numberOfNoun} ${noun}s`;
    }
    else {
        return `${numberOfNoun} ${noun}`;
    }
}