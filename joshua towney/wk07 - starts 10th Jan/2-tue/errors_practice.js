// In the spaces below, write down what each error message means. Try coming up with an answer on your own first, based solely on the error message. You can then use Google to confirm your answer.

// Hint: In a few of the spaces below, rather than just putting stuff inside the <script> tags you may need to edit the tags themselves.

// learn to love error messages
// Write code to intentionally generate these errors yourself! You can edit the <script> element of the enclosed index.html as your scratch pad.

//     1: Uncaught SyntaxError: Unexpected token {

//     Explanation goes here - A curly bracket is in a place it shouldn't be
    
//     console.log{('syntax error');



//     2: Uncaught ReferenceError: greeting is not defined
    
//     Explanation goes here - attempted call of a variable named greeting that has not been set up
    
  
//     let fullGreeting = greeting + '!'
    

//     3: GET file:///scripts.js net::ERR_FILE_NOT_FOUND
    
//     Explanation goes here - the path to the file we want is incorrect

//     <link rel="stylesheet" href="///scripts.js">




//     4: GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)
    
//     Explanation goes here - nothing exists at the domain of the address you entered


        // get 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js' do

                // 'hello'
        // end
    
//     <script>
//     https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js
//     </script>


//     5: Uncaught TypeError: "hello".push is not a function
    
//     Explanation goes here - push is an array function, not a string one
    
//     let greeting = "hello";

//     "hello".push()




//     6: Uncaught TypeError: str.join is not a function
    
//     Explanation goes here - join is an array function, it won't work on strings
    
//     let str = "Hello there, I would like t talk to you"

//     console.log(str.join())




//     7:  Uncaught TypeError: Cannot read property 'name' of undefined
    
//     Explanation goes here - happens when a function is trying to read a variable without a value
        
//     function undefinedProperty(num1) {
//         console.log(num1.name)
//     }

//     let numbers;
//     undefinedProperty(numbers);



//     8: Uncaught SyntaxError: missing ) after argument list
    
//     Explanation goes here - forgot to close brakets after the arguements when calling a funtion
        
//     function orderFood(main,drink) {
//         console.log(main, drink)
//     }

//     orderFood(burger, coke



//     9: Uncaught ReferenceError: Invalid left-hand side in assignment
    
//     Explanation goes here - incorrect use of comparison vs assignment such as = instead of == or += instead of +
    
//     if (num1 = 3 || num2 = 4) {
//         console.log('tada');
//     } 




//     10: Uncaught SyntaxError: Unexpected number
    
//     Explanation goes here - arguements in function need to be separated by a comma and the second arguement is a number

//     function unexpectedNumber(hello 1) {
//     console.log(hello + 1);
//     }
//     




//     11: Uncaught SyntaxError: Unexpected string
    
//     Explanation goes here - arguements in function need to be separated by a comma and the second arguement is a string
    
//     function unexpectedNumber(hello 'hello') {
//        console.log(hello + 'hello');
//     }
     


//     12: Uncaught SyntaxError: Unexpected identifier
    
//     Explanation goes here - arguements in function need to be separated by a comma and the second arguement is a variable

//     function unexpectedNumber(hello there) {
//        console.log(hello + there);
//     }


//     13: Uncaught RangeError: Maximum call stack size exceeded
    
//     Explanation goes here - no more memory to keep calling the same function
    
//     function callStackError() {
//         callStackError();
//     }
//     callStackError();