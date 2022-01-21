// Uncaught SyntaxError: Unexpected token {

//     This means you have an extra curly bracket hanging about somewhere in your code 
    
//     <script>
        // function doSomething (num1, num2) {

        // }} //<------ like that 
//     </script>


//     Uncaught ReferenceError: greeting is not defined
    
//     You have called greeting or asked for greeting somewhere in your code but haven't defined it - OR you've defined it inside something else not related   to the function you're calling

// function doSomething (greeting) {
//     let goodbye = "123"
//     return greeting;
// }
    

//     GET file:///scripts.js net::ERR_FILE_NOT_FOUND
    
//     Either the path is wrong, or the file is not where its said to be
    

//     GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)
    
//     It means the server is unable to find the file on the internet 



//     Uncaught TypeError: "hello".push is not a function
    
//     You can't use .push on a string, only on an array. You'd need to use concat for a similar function 
    
        // hello = [];
        // hello.push('hi', 'hello', 'howdy');
        // console.log(hello);



//     Uncaught TypeError: str.join is not a function
    
//     .join in an array function, can't be used on a string

        // const greetings = ['hi', 'hello', 'howdy'];
        // console.log(greetings.join('-'));


//     Uncaught TypeError: Cannot read property 'name' of undefined
    
//     This happens when you try to access a key of a value that is undefined 



//     Uncaught SyntaxError: missing ) after argument list
    
//     Means that you're missing a closing bracket when you call your function

        // function doSomething (num1, num2) {
        //     return (num1 * num2)
        // }
        // doSomething (44, 5



//     Uncaught ReferenceError: Invalid left-hand side in assignment
    
//     This happens when you've assigned something incorrectly with = or == or ===
    
        // == ---> Loose equality
        // === ---> strict equality 
        // = ---> assignment, assigns an element to a variable 


//     Uncaught SyntaxError: Unexpected number
    
//     When you've written a number incorrectly, using a decimal or comma in the wrong spot
    
        // var number1 = 89,09897;
        // var number2 = 8,09897;


//     Uncaught SyntaxError: Unexpected string
    
//     Double quotes need to be inside single quotes, otherwise you can get this error 

        // '[something=' "+ somethingElse +"']'



//     Uncaught SyntaxError: Unexpected identifier
    
//     This means you're trying to reference a variable that hasn't been declared orrrr a typo in your identifier 

        // functionn doSomething (num1, num2) {
        //     return (num1 * num2)
        // }
    


//     Uncaught RangeError: Maximum call stack size exceeded
    
//    This means you're calling a function that is calling too many functions on top of it so it essentially goes "no, no, too many"