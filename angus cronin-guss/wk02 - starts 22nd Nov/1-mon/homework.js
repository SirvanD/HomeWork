var books = [{
    title: 'Dotcom Secrets',
    author: 'Russel Brunson',
    read: true,
},
    {title: "That will never work",
    author:  "Marc Randolf",
    read: true,
},
    {title: "Brief answers to big questions",
author: "Stephen Hawking",
read: true,
},
    {title: "Never split the difference",
author: "Chris Voss",
read: false,
}];

for (var i = 0; i < books.length; i + 1) {
    var books = books + i;
    var myBooks = books.title + " by " + books.author;
    if (books.alreadyRead) {
        console.log(myBooks + " I read this book");
    } else {
        console.log(myBooks + " I haven't read this book yet");
    }
}



