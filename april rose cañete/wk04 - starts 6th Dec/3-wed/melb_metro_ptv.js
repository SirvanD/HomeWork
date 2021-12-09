
    console.log('melb ptv');

    // create data structure
    // create a function called travel() which takes an argument of 2 strings - origin and destination
    // in a function - 
    // first find the index of the origin and the destination
    // originIndex = ; destinationIndex =  ;
    // indexof
    // then loop through the the train line array - starting from the originIndex to the destinationIndex
    // then print each of the value


    // var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
    // var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
    // var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

    var lines = [
        ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
        ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
        ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"],
        ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Richmond", "South Yarra", "Prahran", "Windsor"],
        ["Flinders Street", "Richmond", "Richmond", "Kooyong", "Tooronga"]
    ];

    var origin = "Melbourne Central";
    var destination = "Windsor";

    

    function travel(origin, destination) {
        var originDestination = [origin, destination];

        lines.forEach(line => {

            var isStationExist = originDestination.every(station => line.includes(station));
    
            // debugger
    
            if (isStationExist) {
                var orginIdx = line.indexOf(origin);
                var destinationIdx = line.indexOf(destination);
                var newArray = [];
                var counter = 0;
    
                for (let i = orginIdx; i <= destinationIdx; i++) {
                    var station = line[i];
                    newArray.push(station);
                    counter+= 1;
                }
    
                // var findRichmondIntersect = newArray.filter(station => {return station == 'Richmond'}).length
    
                // console.log(findRichmondIntersect);
    
                // if (findRichmondIntersect == 2) {
                //     console.log(`orgin: ${origin} \ndestination: ${destination} \n\n${newArray.join(' -----> ')} \n\n${counter-1} stops total`);
                // }
                console.log(`orgin: ${origin} \ndestination: ${destination} \n\n${newArray.join(' -----> ')} \n\n${counter-1} stops total`);
            }
    
        });
    }
    


  

    // function travel(orgin, destination) {
    //     var orginIdx = alamein.indexOf(orgin);
    //     var destinationIdx = alamein.indexOf(destination);
    //     var newArray = [];
    //     var counter = 0;

    //     // console.log(orginIdx);
    //     // console.log(destinationIdx);

    //     for (let i = orginIdx; i <= destinationIdx; i++) {
    //         var station = alamein[i];

    //         newArray.push(station);

    //         counter+= 1;
    //     }

    //    console.log(`orgin: ${orgin} \ndestination: ${destination} \n\n${newArray.join(' -----> ')} \n\n${counter-1} stops total`);  
    // }
