// 1. Uncaught SyntaxError: Unexpected token {

         this error comes when there is a missing curly bracket in a block of code.

         example:

        for(let i=0;i<5;i++)
           console.log(i);
         }

// 2. Uncaught ReferenceError: greeting is not defined
this error comes when a variable is not defined but used later on in the code.

            example:
            console.log(greeting);

// 3. GET file:///scripts.js net::ERR_FILE_NOT_FOUND

        this is when the the file name we wanted is misspelled or the path of the file is wrong

// 4. GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)

        this is when you request file from from a server and that file is not available in the server.

// 5. Uncaught TypeError: "hello".push is not a function

        this is when you try to call an array method on a string.

// 6. Uncaught TypeError: str.join is not a function

        this is when you call an array method on a string

         example:
        let name = "Amy";
        name.join("");

// 7. Uncaught TypeError: Cannot read property 'name' of undefined

         this is when you try to access value of a property which doesn't exist.

// 8. Uncaught SyntaxError: missing ) after argument list
this is when there is an error with how a function is called

        example:
         name ="Anne"
         console.log("welcome to sei" +name;

// 9. Uncaught ReferenceError: Invalid left-hand side in assignment
this is when there is an invalid assignment statement
example:
9 = a + b;

// 10. Uncaught SyntaxError: Unexpected number
this is when a number is given in an invalid format
example:
let num = 8,000;

//11. Uncaught SyntaxError: Unexpected string
this is when we close a string with a ' , at the wrong location.

    '(total=' "+ find total +"']' --> error

    it should be corrected as ,
    '[total="' +findTotal + '"]'

// 12. Uncaught SyntaxError: Unexpected identifier

    this is when we make a mistake in our declaration statements of variables, arrays etc.

    example :
    varr a = 10;
    console.log(a);
