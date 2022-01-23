# JS Errors Practice

In the spaces below, **write down what each error message means.** Try coming up with an answer on your own first, based solely on the error message. You can then use Google to confirm your answer.

**Hint:** In a few of the spaces below, rather than just putting stuff inside the `<script>` tags you may need to edit the tags themselves.

### learn to love error messages

Write code to intentionally generate these errors yourself! You can edit the `<script>` element of the enclosed [index.html](./index.html) as your scratch pad.

------------

- `Uncaught SyntaxError: Unexpected token {`

  > Explanation goes here
    //unexpected curly bracket in your variable / function somewhere
  ```html
  <script>

  const unexpected = () => {

    console.log(`this is a funciton`)
}}
    
  </script>
  ```

- `Uncaught ReferenceError: greeting is not defined`

  > Explanation goes here
//this occurs when you don't define `greeting` as a variable
  ```html
  <script>
  console.log(greeting)
  </script>
  ```

- `GET file:///scripts.js net::ERR_FILE_NOT_FOUND`

  > Explanation goes here
//when you are linking to your js file and you use /// as finding the wrong directory and the file cannot be found
//or the file does not exist or a spelling mistake / typo in the name
  ```html
  <script>
    <script src="///test.js"></script>
  </script>
  ```

- `GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)`

  > Explanation goes here
//the file does not exist within the server the directory does not exist
  ```html
  <script>
    
  </script>
  ```

- `Uncaught TypeError: "hello".push is not a function`

  > Explanation goes here
//this error occurs when you try to use the inbuilt .push() funciton on a data type that is not an Array.
  ```html
  <script>
    hello = `yo`
    hello.push(3)
  </script>
  ```

- `Uncaught TypeError: str.join is not a function`

  > Explanation goes here
//error occurs when the user tries to use in built function join on a data type that isn't an array
  ```html
  <script>
  `string`.join`
  </script>
  ```

- `Uncaught TypeError: Cannot read property 'name' of undefined`

  > Explanation goes here
    this occurs when you cannot access a property due to the fact that it is undefined
  ```html
  <script>
  let problem = {
     name: d
}
console.log(problem.name)
  </script>
  ```

- `Uncaught SyntaxError: missing ) after argument list`

  > Explanation goes here
    occurs when there is an error after a function is called.
  ```html
  <script>
    Uncaught SyntaxError: missing ) after argument list
  </script>
  ```

- `Uncaught ReferenceError: Invalid left-hand side in assignment`

  > Explanation goes here
    this error occurs when you have a bad assignment onto variables or did not declare your
    == correctly
  ```html
  <script>
  if (Math.PI = 3 || Math.PI = 4) {
  console.log('no way!');
}
  </script>
  ```

- `Uncaught SyntaxError: Unexpected number`
    this occurs when you have a number in an unexpected place inside an object or an array

  > Explanation goes here

  ```html
  <script>
    hello = [1, 23232 2]

    console.log(hello)
  </script>
  ```

- `Uncaught SyntaxError: Unexpected string`

  > Explanation goes here
    this occurs when you have an unexpected string when its expecting a different data type inside on an object or an array
  ```html
  <script>
  const hello = [`hello`, "yo" + "yo"  "hello"]

  console.log(hello)
  </script>
  ```

- `Uncaught SyntaxError: Unexpected identifier`

  > Explanation goes here
//when there is an undeclared variable
  ```html
  <script>
  const unexpected = `missing`s
  </script>
  ```

- `Uncaught RangeError: Maximum call stack size exceeded`

  > Explanation goes here
    when you call a function and that in turn calls another function etc. until it 
    hits the call stack limit
  ```html
  <script>
  
  </script>
  ```