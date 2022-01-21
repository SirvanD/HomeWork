let allBtns = document.querySelectorAll('.number-button');
let resetBtn = document.querySelector('.reset-button');
let guessNumberSpan = document.querySelector('.guess-number');

guessNumberSpan.textContent = 3;
let guessNumber = 0;
let secretNumber = 7; //hard code for easy use

allBtns.forEach(function (button) {
    button.addEventListener('click', clickButton)
});
function clickButton(event) {
    guessNumber++;
    guessNumberSpan.textContent = 3 - guessNumber;
    let clickedBtn = event.target;
    clickedBtn.disabled = true;
    let userGuess = Number(clickedBtn.textContent);

    // guessing game bonus exercise - limit guesses to 3 and if you run out display the game over message

    if (guessNumber <= 3 && userGuess === secretNumber) {
        alert('CONGRATULATIONS!');
        return resetButton();
    } else if (guessNumber >= 3 && userGuess != secretNumber) {
        alert('No more chance! GAME OVER!');
        return resetButton();
    }
};

resetBtn.addEventListener('click', resetButton);
function resetButton() {
    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].disabled = false;
        guessNumber = 0;
        guessNumberSpan.textContent = 3;
    }
};


