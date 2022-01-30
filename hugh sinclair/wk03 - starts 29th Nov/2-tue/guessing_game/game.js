console.log('our first game!');



var guessBtns = document.querySelectorAll('section button');
var msg = document.querySelector('.msg');
var resetBtn = document.querySelector('.reset-btn');
var allBtns = document.querySelectorAll('button')


var secretNumber = Math.ceil(Math.random() * guessBtns.length);
console.log(secretNumber); //this randomises the secret number to be anywhere between the length of the buttons array, so if I add more buttons it'll accommodate that in the secret number


//this one is for without all the timer stuff

// function handleClick(event){
//     var clickedButton = event.target
//     if (clickedButton == resetBtn){
//         guessBtns.forEach(function(btn){
//             btn.disabled = false
//         })
//         msg.style.visibility = 'hidden'
//         msg.textContent = ''
//         msg.classList.remove('congrats')
//         msg.classList.remove('guess-again')
//     }else {
//         if(Number(clickedButton.textContent) == secretNumber){
//             msg.style.visibility = 'visible'
//             msg.textContent = 'CONGRATS! YOU GOT IT!'

//         } else{
//             clickedButton.disabled = true;
//             msg.style.visibility = 'visible'
//             msg.textContent = 'Nope, guess again!'
//         }

//     } 
// }

// I had this before i figured out how to add the reset into the event for clicking
// function handleReset(){
//     guessBtns.forEach(function(button){
//         button.disabled = false
//     })
//     msg.style.visibility = 'hidden'
//     msg.textContent = ''
// }






//event.target.dataset.number



var numberOfGuesses = 0 //this tracks the number of guesses the user has made



function handleClick(event){
    var clickedButton = event.target //makes finding the one you clicked easier by declaring it a variable
    if (clickedButton === resetBtn){ //this firstly checks whether the button you clicked was the reset button, so that i can have this all in a single function
        guessBtns.forEach(function(btn){ //this enables all the buttons
            btn.disabled = false
        })
        numberOfGuesses = 0 //resets the number of guesses
        msg.textContent = '' //resets the text content of msg
        msg.classList.remove('congrats') //this removes the class congrats from msg, allowing it to regain the base msg css properties, same goes with the line below removing guess-again
        msg.classList.remove('guess-again')
        secretNumber = Math.ceil(Math.random() * guessBtns.length); //gives the secret number a random number between 1 and 10
        console.log(secretNumber); //I'm console logging this just so i can cheat to test code, can remove it whenever
    }else {

        numberOfGuesses++ // this means if the reset button wasn't pressed, add one to the number of guesses the user has had
        if (numberOfGuesses >= 3){
            guessBtns.forEach(function(btn){ //this will disable all the buttons if you went over your guesses.
                btn.disabled = true
            })
            msg.textContent = 'You ran out of guesses! Hit that reset and try again!'
            return
        }
        if(Number(clickedButton.dataset.number) === secretNumber){ //this uses the dataset number that we declared in the html, so the button can be labeled whatever we want
            guessBtns.forEach(function(btn){ //this will disable all the buttons if you guessed the right one.
                btn.disabled = true
            })
            msg.classList.remove('guess-again') // this is to safeguard the css conflicting, so if they had an incorrect guess first, take that class away from msg and replace it with the congrats one.
            setTimeout(function(){msg.classList.add('congrats')}, 200); //this is the inbuild function Sean taught me, it essentially gets JS to say "okay, run this function, pause here for 200ms, then continue with the code"
            msg.textContent = `CONGRATS! YOU GOT IT! It took you ${numberOfGuesses} guesses!` //logs the message and the number of guesses

        } else{   
            clickedButton.disabled = true; //disable the one they clicked
            msg.classList.remove('congrats') // same as above, avoiding css clashing
            setTimeout(function(){msg.classList.add('guess-again')}, 200);
            msg.textContent = `Nope, guess again! You've had ${numberOfGuesses}  guesses so far!`        
        }
    } 
}


allBtns.forEach(function(btn){
    btn.addEventListener('click', handleClick)
})
// guessBtns.forEach(function(btn){
//     btn.addEventListener('click', handleClick)
// })
// resetBtn.addEventListener('click', handleClick)


//eventually you ALWAYS win, maybe we can limit how many guesses the user gets!



