// write a vowelCount function that returns the number of occurrences of vowels in a word. Vowels are a, e, i, o, u

// say for example the word "Spaghettification". your function should tell me there are 7 vowels

// vowelCount('Spaghettification') // => 7
// vowelCount('HELLO') // => 2
// vowelCount('cake pudding') // => 4

function vowelCount(string) {
    var vowelCheckArray = string.split('');
    var vowelCounter = 0;
    for (let i = 0; i < vowelCheckArray.length; i++) {
        if ((vowelCheckArray[i] === 'a') || (vowelCheckArray[i] === 'e') || (vowelCheckArray[i] === 'i') || (vowelCheckArray[i] === 'o') || (vowelCheckArray[i] === 'u')) {
            vowelCounter++;
        }
    }
    return vowelCounter;
} 