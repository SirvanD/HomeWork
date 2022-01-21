// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books = [
    {
    title: 'the hobbit',
    author: 'JRR Tolkein',
    read: true
} , {
    title: 'harry potter',
    author: 'JK Rowling',
    read: true
} , {
    title: 'Goosebumps',
    author: 'RL Stine',
    read: false
} , {
    title: 'Charlie and the Chocalte Factory',
    author: 'Roald Dahl',
    read: false
}    
];
var counter = 0;

while (counter < books.length) {
    if (books[counter].read == true) {
    console.log('You have already read ' + books[counter].title + ' by ' + books[counter].author)
} else {
    console.log('You still need to read ' + books[counter].title + ' by ' + books[counter].author)
    }
    counter = counter + 1;
}    

