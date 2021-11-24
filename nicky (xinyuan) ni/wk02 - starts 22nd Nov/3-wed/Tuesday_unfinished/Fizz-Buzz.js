var counter = 1;

function threeDiv(counter){
   return(counter % 3 == 0)
}

function fiveDiv(counter){
    return(counter % 5 == 0)
}

while (counter <= 100 ){
   if (threeDiv(counter)){
     console.log('Fizz')
   } else if (fiveDiv(counter)){
     console.log('Bizz')
   } else {
     console.log(counter) 
   }

   counter ++;
}



//+++++++(answer below for bonus part)

// function fizzBuzz(input){
//   if (input % 3 == 0 && input % 5 !== 0){
//     console.log('Fizz')
//   } else if (input % 5 == 0 && input % 3 !== 0){
//     console.log('Bizz')
//   } else if (input % 3 == 0 && input % 5 == 0){
//     console.log('FizzBizz')
//   } else {
//     console.log(input) 
//   }
// }

