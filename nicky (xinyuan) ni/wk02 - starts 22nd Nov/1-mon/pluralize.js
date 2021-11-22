function pluralize(number, noun){
    var elements = [Number(number), noun]
    if (Number(number) <= 1){
    console.log(elements.join(' '))
    } else if (Number(number) > 1) {
    console.log(elements.join(' ') + 's')  
    }
 }
 

 
