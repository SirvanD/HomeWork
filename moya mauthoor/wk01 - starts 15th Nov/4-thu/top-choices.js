
let top5NicCageMovies = ["Face Off", "Pig", "Willy's Wonderland", "Con Air", "The Rock"];

// Hey DT and Kasun, I'd legit love to know if there is a better way to add suffixes here, e.g. so this function can be scaled up correctly. The code below only works for numbers between 1-20 and breaks at 21 (i.e. would return '21th'). 
function addSuffix(counter) {
    let listNumber = counter + 1;
    if (listNumber > 3 ) {
        return `${listNumber}th`;
    } else if (listNumber === 1) {
        return "1st";
    } else if (listNumber === 2) {
        return "2nd";
    } else if (listNumber === 3) { 
        return "3rd";
    }
}

let counter = 0;
while (counter < top5NicCageMovies.length) {
    console.log(`My ${addSuffix(counter)} choice is ${top5NicCageMovies[counter]}.`);
    counter++;
}

