var books = [
     {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        readingstatus: 'yes'
    },
     {
        title: 'TThe Lord of the Rings',
        author: 'J.R.R. Tolkien',
        readingstatus: 'yes'
    },
     {
        title: 'Pet Sematary',
        author: 'Stephen King',
        readingstatus: 'no'
     }
]

var userBook = prompt ("Enter a book title!"); 

var book = books.find(book => book.title === userBook);

if (book['readingstatus'] === 'yes'){
    alert("You already read " + book['title'] + " by " + book['author']+ ".");
} else if(book['readingstatus'] === 'no'){
    alert("You still need to read " + book['title'] + " by " + book['author'] + ".");
}
















