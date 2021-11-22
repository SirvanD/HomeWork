var books = [`theHobbit`, `jackReacher`, `captainUnderpants`, `justDisgusting`];
var counter = 0

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

console.log(books[counter])
if (books[0]) {
    console.log(theHobbit)
    if (theHobbit.read == true) {
        console.log(`you've already read that`)
    }
}
if (books[1]) {
    console.log(jackReacher)
    if (jackReacher.read = true) {
        console.log(`you've already read that.`)
    }
}

if (books[2]) {
    console.log(captainUnderpants)
    if (captainUnderpants.read == true) {
        console.log(`you've already read that`)
    }else {
        console.log `you need to read this `
    }
}

if (books[3]) {
    console.log(justDisgusting)
    if (justDisgusting.read == true) {
        console.log(`you've already read that`)
    }
}







console.log(books)