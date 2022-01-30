
var message = prompt('talk to grandma');

//console.log(message);

while (message != 'BYE') {

    if (message == message.toUpperCase()) {
        message = prompt('NO, NOT SINCE 1938!');
    } else {
        message = prompt('HUH?! SPEAK UP, SONNY!'); 
    }
    //break;
}