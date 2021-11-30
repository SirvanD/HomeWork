console.log('our first game!')



var guessBtns = document.querySelectorAll('.guess-btn')
var msg = document.querySelector('.msg')
var resetBtn = document.querySelector('.reset-btn')

var secretNumber = Math.ceil(Math.random() * guessBtns.length);
console.log(secretNumber)


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








function handleClick(event){
    var clickedButton = event.target
    if (clickedButton == resetBtn){
        guessBtns.forEach(function(btn){
            btn.disabled = false
        })
        msg.textContent = ''
        msg.classList.remove('congrats')
        msg.classList.remove('guess-again')
        secretNumber = Math.ceil(Math.random() * guessBtns.length);
        console.log(secretNumber);
    }else {
        if(Number(clickedButton.textContent) == secretNumber){
            msg.classList.remove('guess-again')
            setTimeout(function(){msg.classList.add('congrats')}, 200);
            msg.textContent = 'CONGRATS! YOU GOT IT!'

        } else{
            clickedButton.disabled = true;
            msg.classList.remove('congrats')
            setTimeout(function(){msg.classList.add('guess-again')}, 200);
            msg.textContent = 'Nope, guess again!'
        }

    } 
}



guessBtns.forEach(function(btn){
    btn.addEventListener('click', handleClick)
})
resetBtn.addEventListener('click', handleClick)






