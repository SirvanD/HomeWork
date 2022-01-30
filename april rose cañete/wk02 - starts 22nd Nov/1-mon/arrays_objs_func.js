/** The Reading List */

var books = [{
        title: 'Kafka on the Shore',
        author: 'Haruki Murakami',
        alreadyRead: true,
    },
    {
        title: 'Ikigai',
        author: 'Hector Garcia, Francesc Miralles',
        alreadyRead: false
    },
    {
        title: 'The Motivation Manifesto',
        author: 'Brendon Burchard',
        alreadyRead: true
    }
];

var i = 0;

while (i < books.length ) {
    var title = books[i].title;
    var auth = books[i].author;
    var alreadyRead = books[i].alreadyRead;

    //console.log(`${title} by ${auth}`);

    if (alreadyRead == true) {
        console.log(`I've already read ${title} by ${auth}`);
    } else {
        console.log(`I still need to read ${title} by ${auth}`);
    }

    i++;
}


/** The Movie Database */

var favMovie = {
    title: 'Eternals',
    duration: 150,
    stars: ['Gemma Chen', 'Angelina Jolie', 'Richard Madden', 'Kit Harrington']
};

function showMovieInfo() {
    console.log(`${favMovie.title} lasts for ${favMovie.duration} minutes. Stars: ${favMovie.stars}`);
    //return favMovie.title + ' lasts for ' + favMovie.duration + ' minutes ' + 
}

showMovieInfo();


/** Combine Words */

function combineWords(color, pet) {
    return color + pet;
}

console.log(combineWords('red', 'dog'));


/** The Pluralizer */

//var collNouns = ['sheep', 'geese', 'wolves'];

function pluralize(noun, number) {
    if (number > 1 && noun != 'sheep') {
        if (noun == 'goose') {
            return number + ' ' + 'geese';
        } else {
            return number + ' ' + noun + 's';
        } 
    }
    else {
        return number + ' ' + noun
    }
}

console.log(pluralize('dog', 5));


/** Word Order Reverse */

function wordReverse(str) {
    strArr = str.split(' ');

    return strArr.reverse().join(' ');
}
console.log(wordReverse('we are good friends'));


/** Find Longest Word Length */
//debugger

function findLongestWordLength(strArr) {

    //var strArr = ['Illllllllllllllllll', 'love', 'cssjhgjkl'];
    var i = 0;
    var len = 0;
    var longestLen;

    while (i < strArr.length) {
        if (strArr[i].length > len) {
            len = strArr[i].length;
            longestLen = len;
        } 
        i++;
    }
    return longestLen;
}
    
//findLongestWordLength(['my', 'cake', 'pudding']) 

