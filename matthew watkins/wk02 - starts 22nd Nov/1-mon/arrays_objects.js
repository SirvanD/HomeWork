var justDisgusting = {
    title: `Just Disgusting` ,
    author: `Andy Griffiths` , 
    read: true ,
} ;

var theHobbit = {
    title: `the Hobbit` ,
    author: `tolkien` ,
    read: true,
}

var captainUnderpants = {
    title: `captain underpants` ,
    author: `Dav pilkey` ,
    read: false, 
}

var jackReacher = {
    title: `jackreacher` ,
    author: `Lee child` ,
    read: true ,
}

var counter = 0
var books = [justDisgusting, jackReacher, captainUnderpants, justDisgusting];
var booksLength = books.length ;

while (counter < booksLength ) {
    
    if ( books[counter].read == true) { 
        console.log(`${books[counter].title} , by ${books[counter].author} you've already read that`)
    } else {
        console.log(`${books[counter].title} , by ${books[counter].author} you need to read this`)
    }
    counter++;
}







