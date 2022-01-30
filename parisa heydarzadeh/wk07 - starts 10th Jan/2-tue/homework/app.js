// 1 - Uncaught SyntaxError: Unexpected token {

// explanation: Semicolon is not used in forloop hence UncaughtSyntax Error pops up in console.log
// <script>

// function checkSyntaxError (num1, num2) {
//   let Arr = [];
//   if (num1 < num2) {
//     for (i = num1, i < num2, i++) {
//       Arr.push(i);
//     }
// }
// </script>


// 2 - Uncaught ReferenceError: greeting is not defined

// <script>
// explanation: greeting is not defined as a function so it can't be called in console.
// var num1 = 2,
//     num2 = 3;
// function numbers() {
//   return num1 + num2;
// }
// console.log(greeting());
// </script>


// 3 - GET file:///scripts.js net::ERR_FILE_NOT_FOUND
// once incorrect address file is linked to HTML this error will shown on console.
// <script> src="scripts.js" </script>

//4 - GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)




//5 - Uncaught TypeError: "hello".push is not a function
// explanation = only arrays can be used for push as "hello" is a string therefore will give above error.
// <script>
//   let hello = ""
//   console.log(hello.push("paris"))
// </script>



//6- Uncaught TypeError: str.join is not a function
// explanation = only arrays can be used for join in built in functions as "hello" is a string therefore will give above error.
// <script>
//   let str = "hello"
//   console.log(str.join("paris"))
// </script>


//7- Uncaught TypeError: Cannot read property 'name' of undefined
// explanation: "details" as variable is an object and once we declare it with square bracket it will give this error.
// <script>
// let details = {
//   name: ["paris", "John", "Sara"],
//   age: [20, 14, 60],
// };
// details[0].name;
// </script>

//8-  Uncaught SyntaxError: missing ) after argument list
//  Explanation: it has to be called as console.log(count()) hence missing ")"
// <script>
// function count(num1, num2){
//     if (num1 < num2) {
//         return num1
//     }   
// }
// console.log(count()
// </script>


//9- Uncaught ReferenceError: Invalid left-hand side in assignment
// Explanation:The JavaScript exception "invalid assignment left-hand side" occurs when there was an unexpected assignment somewhere. For example, a single " = " sign was used instead of " == " or " === ".
// <script>
//</script>


//10 - Uncaught SyntaxError: Unexpected number
// Explanation: comments can't be used for integers in javascript
// <script>
// // let num = 5,333
// </script>


// 10 - Uncaught SyntaxError: Unexpected string
// Explanation: with name we assigning a string at " (' ) ", we ending it. That means when we reach ("), the start of a new string using double quotes, it's an unexpected string.
/* <script>
//  '[name=' "+ paris +"']'
//</script> 


// 11 - Uncaught SyntaxError: Unexpected identifier
// Explanation: Const is a so-called immutable variable which is used for variables that we don't want anyone to modify or redeclare
// <script>
// const favColor = [1,2,3]
//  const favColor = [5]
//  console.log(favColor)
// </script>


// 12 - Uncaught RangeError: Maximum call stack size exceeded
// Explanation: happens with recursive functions as this error is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value. This can be encountered when: passing a value that is not one of the allowed string values to String
// <script>
// Optional code goes here
// </script>