var counter = 0;

function isEven(counter){
   return(counter % 2 == 0)
}

while (counter <= 20 ){
   if (isEven(counter)){
    console.log(counter + " is even")
   } else {
    console.log(counter + " is odd")  
   }

   counter ++;
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>The even/odd reporter</h1>
//     <script src="loopEvenOdd.js"></script>
// </body>
// </html>

