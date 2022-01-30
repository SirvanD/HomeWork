
// Uncaught SyntaxError: Unexpected token {

// This error is caused by an issue with the code's syntax, e.g. a spelling error or misplaced character. 

<script>
    function helloWorld() {
        console.log{("hello");
    }

    helloWorld()
</script>


// Uncaught ReferenceError: greeting is not defined

// This kind of error is caused when a variable is either not defined or not accessible (e.g. when a function tries to use a variable local to a different function).

<script>
    function helloWorld() {
        let greeting = "hello";
    }

    console.log(greeting);
</script>


// GET file:///scripts.js net::ERR_FILE_NOT_FOUND

// This kind of error occurs when a linked/referenced file is not in the specified location, or if the path provided is incorrect. E.g. for the script linked below, the file may not exist in that location or the name may be misspelled (e.g. the file is actually called "script.js") to generate this error. 

<script src="scripts.js"></script>


// GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)

// This error occurs when your code references an external/third-party source that is no longer available on the third-party server. 

<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js"></script>


// Uncaught TypeError: "hello".push is not a function

// This kind of error occurs when you call a function on the wrong data type, e.g. using an array function on a string:

<script>
    "hello".push("hi there");
</script>


// Uncaught TypeError: str.join is not a function

// Similar to the error above, this error is caused when a specific function is used on the wrong data type - e.g. here, the join function is designed for use on arrays but is being called on a string. 

<script>
    let str = "howdy there";
    str.join("-");
</script>


// Uncaught TypeError: Cannot read property 'name' of undefined

// This error is caused by declaring a variable and trying to use it (e.g. calling a function on it) without assigning it a value. 

<script>
    let name;
    name.length;
</script>


// Uncaught SyntaxError: missing ) after argument list

// This error is caused when there is a syntax error in a function, usually caused by a missing piece of closing punctuation, like a quote mark or parenthesis:

<script>
    function greeting() {
        console.log("hello"
    }
    greeting();
</script>


// Uncaught ReferenceError: Invalid left-hand side in assignment

// This error is usually caused when you accidentally assign a variable a value through "=" rather than using the comparative "==" or "===", like below: 

<script>
    function greeting(firstName, lastName) {
        if (firstName = "Arthur" && lastName = "Morgan") {
            console.log("Howdy partner!");
        }
    }
    greeting("Sadie", "Rushwater");
</script>

// Uncaught SyntaxError: Unexpected number

// This error can be caused by using incorrect syntax around numbers, e.g. using a comma separator instead of a period when using decimal numbers. 

<script>
    let number = 5,10
    console.log(number)
</script>

// Uncaught SyntaxError: Unexpected string

// This error usually occurs when the syntax around a string is incorrect or a string is placed in the wrong context, e.g. accidentally adding a string where the code was led to expect an object: 

<script>
    let names = {
        first: "Arthur",
        middle: "Bradley"
    }, "Morgan";
</script>


// Uncaught SyntaxError: Unexpected identifier

// This error can be caused when you leave out necessary separator punctuation (e.g. commas, semicolons, or plus signs to concatenate as in the example below). The code is expecting the punctuation but in this case finds a variable instead. 

<script>
    let name = "Arthur";
    let message = "hello" name;
</script>

// Uncaught RangeError: Maximum call stack size exceeded

// This error usually occurs when you have a recursive function, i.e. a function that calls itself. This means the function can get stuck in a loop of calling itself a potentially infinite number of times, so JavaScript detects this with a range error. 

<script>
    function hello() {
        hello();
    }

    hello();
</script>