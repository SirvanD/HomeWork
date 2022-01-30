var alameinLine = ["Flinders_Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenLine = ["Flagstaff", "Melbourne Central",  "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];
var userinput1 = process.argv[2]
var userinput2 = process.argv[3]


function takeMe (userinput1, userinput2){

    var counter = 0;
    for(let i = 0; i < sandringhamLine.length; i++){
        if (sandringhamLine.includes(str[i]) == true){ 
            counter++
        }
    }


   
        // for(let i= 0; i < alameinLine.length; i++){

        //     console.log(`${userinput1} ----> ${alameinLine[i]} ----> ${userinput2}`)
        // }
        
    
}

function vowelCount(str) {
    
    var counter = 0;
    for(let i = 0; i < str.length; i++){
        if (vowels.includes(str[i]) == true){ 
            counter++
        }
    }
    return counter

   }
