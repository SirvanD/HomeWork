var age = prompt ('Please enter your age on ID!'); 

if (age < 18) {
    alert('You are too young to be in here!')
} else if (age >= 18 && age < 21){ 
    alert('Come on in (but no drinking)!')
} else if (age >=21 && age < 75){
    alert('Come on in!')
} else if (age >75){
    alert('Are you sure you want to be here?')
}else{
    alert('No ID, no entry.')
}




