let conversation = prompt("what do you want to say to grandma?","speak loudly she's deaf!");
let isAllUpper = false;

while(conversation !== 'BYE'){
        if(conversation !== conversation.toUpperCase()){
            alert('HUH?! SPEAK UP, SONNY!');  
        } else {
            alert('NO, NOT SINCE 1938!');
        }
        conversation = prompt("what do you want to say to grandma?","speak loudly she's deaf!");
}

