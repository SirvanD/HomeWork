// # JS Errors Practice

// In the spaces below, **write down what each error message means.** Try coming up with an answer on your own first, based solely on the error message. You can then use Google to confirm your answer.

// **Hint:** In a few of the spaces below, rather than just putting stuff inside the `<script>` tags you may need to edit the tags themselves.

// ### learn to love error messages

// Write code to intentionally generate these errors yourself! You can edit the `<script>` element of the enclosed [index.html](./index.html) as your scratch pad.

// ------------

// 1. - `Uncaught SyntaxError: Unexpected token {`

//   > Explanation goes here
// Error is self explantory, unexpected curly bracket
//   ```html
//   <script>
// function {lol (num) {"whats going on"}
//   </script>
//   ```


// 2. - `Uncaught ReferenceError: greeting is not defined`

//   > Explanation goes here
//no such variable as greeting

//   ```html
//   <script>
// if (greeting > 3){ 
//     console.log("hello world")
// }
//   </script>
//   ```

// 3. - `GET file:///scripts.js net::ERR_FILE_NOT_FOUND`

//   > when file does not exist (in the path given?)

//   ```html
//   <script>
{/* <script src = "script.js"></script> */}
//   </script>
//   ```

// 4. - `GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)`

//   > Explanation goes here

//   ```html
//   <script>
//   // Optional code goes here
//   </script>
//   ```

// 5. - `Uncaught TypeError: "hello".push is not a function`

//   > Explanation goes here

//   ```html
//   <script>
str.push(function(num) {
    return num * 2;
  });
//   </script>
//   ```

// 6. - `Uncaught TypeError: str.join is not a function`

//   > Explanation goes here

//   ```html
//   <script>
str.join(function(num) {
    return num * 2;
  });
//   </script>
//   ```

// 7. - `Uncaught TypeError: Cannot read property 'name' of undefined`
//   > Explanation goes here
// this is when a container variable 'name' is not defined 

//
//   ```html
//   <script>
//for (i = 0; i < 10; i++)
//   </script>
//   ```

// 8. - `Uncaught SyntaxError: missing ) after argument list`

//   > Explanation goes here
// When you dont close the parenthesis
//   ```html
//   <script>
// console.log(Number(3) wow)
//   </script>
//   ```

// 9. - `Uncaught ReferenceError: Invalid left-hand side in assignment`

//   > Explanation goes here
// When there is an unexpected assignent somewhere, using = instead of ==
//   ```html
//   <script>
//   // Optional code goes here
//   </script>
//   ```

// 10. - `Uncaught SyntaxError: Unexpected number`

//   > Explanation goes here
// When a string is expected instead of a number
//   ```html
//   <script>
//   // Optional code goes here
//   </script>
//   ```

// 11. - `Uncaught SyntaxError: Unexpected string`
//   > Explanation goes here
// When a number is expected instead of a string


//   ```html
//   <script>
//   // Optional code goes here
//   </script>
//   ```

// 12. - `Uncaught SyntaxError: Unexpected identifier`

//   > Explanation goes here
//Usually happenes when you misplace commas or quotation marks 

//   ```html
//   <script>
// ("username," visitorName);
//   </script>
//   ```

// 13. - `Uncaught RangeError: Maximum call stack size exceeded`

//   > Explanation goes here
// call stack limit is when you call a function that calls another function until and it keeps going until you hit the call stack limit


//   ```html
//   <script>
//   // Optional code goes here
//   </script>
//   ```