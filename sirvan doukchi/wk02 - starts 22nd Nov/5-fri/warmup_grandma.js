let message = toString(prompt ('Speak to Grandma here !')); 
function handleKeyPress(){
    while(message != 'BYE') {
    if (message != message.toUpperCase()) {
        alert('Huh?! SPEAK UP, SONNY')  
        message = prompt ('Speak to Grandma here !');      
    } else {
        alert ('NO, NOT SINCE 1938!')
        message = prompt ('Speak to Grandma here !');
    }
}alert ("BYE SUN! ")
 } handleKeyPress()

