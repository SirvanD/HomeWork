

// function helloWorld(langCode){
// let message = 'Hello World in English';
//     switch(langCode){
//          case 'es': message = 'Hola Mundo in Espaniola'; break;
//          case 'de': message = 'Hallo Welt in Deutsch'; break;
//          default: ; //show english value
//     }
//     alert(message) 
// }

// helloWorld(prompt('enter language codes either "en", "de" or "es"'));


// function assignGrade(numScore){
//     switch(true){
//         case numScore>=80: return `Booyah ${numScore} is an A!`; break;
//         case numScore>=70 : return `Not bad - ${numScore} is a B!`; break;
//         case numScore>=60 : return `So ${numScore} is a C - that's ok!`; break;
//         case numScore>=50 : return `${numScore} just scrapes through as a D!`; break;
//         default : return `Oh no!! ${numScore} is an F`;
//     }
// }

let userNumber = prompt('enter a number');

//prompt returns a string
console.log(Number(userNumber)+5);
