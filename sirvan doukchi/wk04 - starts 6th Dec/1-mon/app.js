//1.Vowel Count

const vowelArray = ['a','e','i','o','u'];

function vowelCount(strInpout){
    
   let newArray = strInpout.toLowerCase().split('')
   let vowelCounter = 0;
   for (let i = 0; i<newArray.length; i++){
    //console.log(newArray);
    vowelArray.forEach (function(element) {
        
        if (newArray[i] == element) {
            vowelCounter++;
            vowelCounter = vowelCounter;
            //console.log(newArray[i])
        }
         
    }
    )
   }console.log(vowelCounter) 
   
}


// vowelCount('Spaghettification') // => 7
// vowelCount('HELLO') // => 2
// vowelCount('cake pudding') // => 4

// 2. Grandma returns
function randomNumberFunc() {  
    return Math.floor(Math.random() * (1950 - 1930 + 1) + 1930)
  }
  
  
  //console.log(randomYear)


// function randomNumber() {
//   let randomNum = Math.floor(Math.random() * 20)  
//   return randomNum;
// }let randomNumTest = randomNumber()
// console.log(randomNumTest)

let message = toString(prompt ('Speak to Grandma here !')); 
function handleKeyPress(){
    while(message !== 'BYE') {
    if (message != message.toUpperCase()) {
        alert('Huh?! SPEAK UP, SONNY')  
        message = prompt ('Speak to Grandma here !');      
    } else {
        let randomYear = randomNumberFunc()
        alert ('NO, NOT SINCE ' + randomYear)
        message = prompt ('Speak to Grandma here !');
    }
} 
let counter = 0;
counter ++;
if (counter == 3) {
    alert ("BYE SUN! ")
}



 } handleKeyPress()
