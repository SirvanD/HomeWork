let conversation = prompt("what do you want to say to grandma?","speak loudly she's deaf!");
let isAllUpper = false;

while(!isAllUpper){
    let i = 0;
    while(i < conversation.length){
        console.log(conversation[i], conversation[i].toUpperCase());
        if(conversation[i] !== conversation[i].toUpperCase()){
            isAllUpper = false;
            alert('HUH?! SPEAK UP, SONNY!');
            conversation = prompt("what do you want to say to grandma?","speak loudly she's deaf!");
            break;
        } else{
            i++;
            isAllUpper = true;
        }
    }
}

if(isAllUpper==true){
    alert('NO, NOT SINCE 1938!');
}

