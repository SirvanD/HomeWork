var books = [
     {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        readingStatus: 'yes'
    },
     {
        title: 'TThe Lord of the Rings',
        author: 'J.R.R. Tolkien',
        readingStatus: 'yes'
    },
     {
        title: 'Pet Sematary',
        author: 'Stephen King',
        readingStatus: 'no'
     }
]

var userBook = prompt ("Enter a book title!"); 

var book = books.find(book => book.title === userBook);

if (book['readingStatus'] === 'yes'){
    alert("You already read " + book['title'] + " by " + book['author']+ ".");
} else if(book['readingStatus'] === 'no'){
    alert("You still need to read " + book['title'] + " by " + book['author'] + ".");
}

















