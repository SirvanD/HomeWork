# Homework - JS Errors Practice

- `Uncaught SyntaxError: Unexpected token {`

  > Syntax error on code - either there's an extra bracket or missing a closing bracket.

  ```html
  <script>
    function something() {{ console.log('something') }
  </script>
  ```

- `Uncaught ReferenceError: greeting is not defined`

  > greeting variable or function was called but not declared before a call.

  ```html
  <script>
      console.log(greeting);
  </script>
  ```

- `GET file:///scripts.js net::ERR_FILE_NOT_FOUND`

  > scripts.js file doesn't exist or calling a wrong file from html

  ```html

  <script src="scripts.js">
  </script>
  ```

- `GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)`

  > either link doesn't exist anymore or incorrect link

  ```html
  <script>
  // Optional code goes here
  </script>
  ```

- `Uncaught TypeError: "hello".push is not a function`

  > cannot use push method into a string type

  ```html
  <script>
   console.log("hello".push)
  </script>
  ```

- `Uncaught TypeError: str.join is not a function`

  > cannot use join method into a string type

  ```html
  <script>
    console.log(atr.join)
  </script>
  ```

- `Uncaught TypeError: Cannot read property 'name' of undefined`

  > trying to access 'name' property that doesn't exist or null

  ```html
  <script>
      var myObj = {};

      var name = myObj.name
  </script>
  ```

- `Uncaught SyntaxError: missing ) after argument list`

  > missing a closing bracket in a function that has argument

  ```html
  <script>
      function (int {}
  </script>
  ```

- `Uncaught ReferenceError: Invalid left-hand side in assignment`

  > incorrect used of the operator

  ```html
  <script>
    var str = '1' += '2'
  </script>
  ```

- `Uncaught SyntaxError: Unexpected number`

  > a syntax erro when a number is placed in wrong place in a function or when declaring a variable

  ```html
  <script>
     function something() 1{};
     var 1
  </script>
  ```

- `Uncaught SyntaxError: Unexpected string`

  > a syntax error when a string is placed in wrong place in a function or when declaring a variable

  ```html
  <script>
    function something() 'str' {};
    var "str"
  </script>
  ```

- `Uncaught SyntaxError: Unexpected identifier`

  > when an identifier is placed in the wrong position which breaks the syntax

  ```html
  <script>
    function something() str {};
  </script>
  ```

- `Uncaught RangeError: Maximum call stack size exceeded`

  >  this could be caused by an infinite loop in a code or a function was called multiple times which hits the limit of the stack size

  ```html
  <script>
  // Optional code goes here
  </script>
  ```