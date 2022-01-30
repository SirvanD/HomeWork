# JS Errors Practice

In the spaces below, **write down what each error message means.** Try coming up with an answer on your own first, based solely on the error message. You can then use Google to confirm your answer.

**Hint:** In a few of the spaces below, rather than just putting stuff inside the `<script>` tags you may need to edit the tags themselves.

### learn to love error messages

Write code to intentionally generate these errors yourself! You can edit the `<script>` element of the enclosed [index.html](./index.html) as your scratch pad.

------------

- `Uncaught SyntaxError: Unexpected token {`

  > Explanation goes here: 
  - an extra "{" is used.

  ```html
  <script>
  // Optional code goes here

    let num = 123{

  </script>
  ```

- `Uncaught ReferenceError: greeting is not defined`

  > Explanation goes here: 
  - the identifier "greeting" does not exit or is not defined before referred.

  ```html
  <script>
  // Optional code goes here

    console.log(greeting)

  </script>
  ```

- `GET file:///scripts.js net::ERR_FILE_NOT_FOUND`

  > Explanation goes here: 
  - the scripts.js file is not linked to its correct location, or this file does not exist.

  ```html
  <script>
  // Optional code goes here
  </script>
  ```

- `GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)`

  > Explanation goes here: 
  - the http link https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js does not exist or is not available.

  ```html
  <script>
  // Optional code goes here
  </script>
  ```

- `Uncaught TypeError: "hello".push is not a function`

  > Explanation goes here: 
  - push  is a build-in function for array, while "hello" is a string

  ```html
  <script>
  // Optional code goes here

    "hello".push("4")

  </script>
  ```

- `Uncaught TypeError: str.join is not a function`

  > Explanation goes here: 
  - the data type of "str" is not an array, while join is a build-in function works for array only.

  ```html
  <script>
  // Optional code goes here

    let str=123;
    str.join('')


  </script>
  ```

- `Uncaught TypeError: Cannot read property 'name' of undefined`

  > Explanation goes here: 
  - using a property whose value is null or undefined.

  ```html
  <script>
  // Optional code goes here

    let obj={};
    console.log(obj.a.name)

  </script>
  ```

- `Uncaught SyntaxError: missing ) after argument list`

  > Explanation goes here:
  - the argument is expected to followed by a comma, but not.

  ```html
  <script>
  // Optional code goes here:

    console.log("a""b")

  </script>
  ```

- `Uncaught ReferenceError: Invalid left-hand side in assignment`

  > Explanation goes here:
  - in if statesment, using "=" rather than "==" or "===" in condition, where the program treat it as assgin instead of compare a value, so as to cause this error

  ```html
  <script>
  // Optional code goes here:

    if (a = 2) {
        return 3
    }

  </script>
  ```

- `Uncaught SyntaxError: Unexpected number`

  > Explanation goes here
    - a non-number data directly followed by a number.

  ```html
  <script>
  // Optional code goes here

    let str='abc'123

    or

    let str = ''2''

  </script>
  ```

- `Uncaught SyntaxError: Unexpected string`

  > Explanation goes here:
  - a non-string data directly followed by a string. or  combine strings without "+"

  ```html
  <script>
  // Optional code goes here

    let str = 123'abc'456

    or

    let str = """"

  </script>
  ```

- `Uncaught SyntaxError: Unexpected identifier`

  > Explanation goes here
  - a primitive mixed with an identifier.

  ```html
  <script>
  // Optional code goes here
    let str = ''abc''

    or

    function doSomething(){
        return 1
    }
    let str = doSomething()abc

  </script>
  ```

- `Uncaught RangeError: Maximum call stack size exceeded`

  > Explanation goes here:
   - a recursive function whose base case cannot be met and thus leads to infinite recursion until using up all available call stack in the browser.

  ```html
  <script>
  // Optional code goes here

    function infinite(num) {
        for (let i=0; i<=0; i--){
        infinite(num);
        }
    }
    infinite(4)

  </script>
  ```