var x = document.getElementById("city-type");
var body = document.querySelector('body')
var btn = document.createElement('button')

var NYC = document.createElement("option");
var SF = document.createElement("option");
var LA = document.createElement("option");
var SYD = document.createElement("option");
var ATX = document.createElement("option");
x.add(NYC)
x.add(SF)
x.add(LA)
x.add(SYD)
x.add(ATX)


NYC.text = "NYC";
SF.text = "SF";
LA.text = "LA";
SYD.text = "SYD";
ATX.text = "ATX";

NYC.value = "NYC";
SF.text = "SF";
LA.text = "LA";
SYD.text = "SYD";
ATX.text = "ATX";

var selector = document.getElementById("city-type");
        for(var i = 0;i < selector.options.length;i++){
            console.log(selector.options[i].value);
            
            // if(selector.options[i].value == NYC ){
            //     body.style.backgroundImage = "url('https://i.insider.com/5d0150e06fc9200b5a05f042?width=1000&format=jpeg&auto=webp')"
            // }
        }





    
    // body.style.backgroundImage = "url('https://i.insider.com/5d0150e06fc9200b5a05f042?width=1000&format=jpeg&auto=webp')";
// })

