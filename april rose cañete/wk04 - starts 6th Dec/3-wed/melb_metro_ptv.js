
    console.log('melb ptv');

    // planning
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
        ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
    ];

    // var origin = "Melbourne Central";
    // var destination = "Windsor";
    

    function travel(origin, destination) {
        var originDestination = [origin, destination];
        var firstLineIntersect = [];
        var secondLineIntersect = [];

        lines.forEach(line => {

            // check if both station exist in a line
            var isStationExist = originDestination.every(station => line.includes(station));
    
            // debugger
    
            if (isStationExist) {
                var orginIdx = line.indexOf(origin);
                var destinationIdx = line.indexOf(destination);
                var newArray = [];
                var counter = 0;

                // if orign idx > destination idx - reverse line array
    
                for (let i = orginIdx; i <= destinationIdx; i++) {
                    var station = line[i];
                    newArray.push(station);
                    counter+= 1;
                }
    
                console.log(`orgin: ${origin} \ndestination: ${destination} \n\n${newArray.join(' -----> ')} \n\n${counter-1} stops total`);
            } else {
                var richmondIdx = line.indexOf('Richmond');
                var originIdx = line.indexOf(origin);
                

                if (line.includes(origin)) {
                    firstLineIntersect = line.slice(originIdx, richmondIdx + 1)

                    // console.log('origin:');
                    // console.log(firstLineIntersect);
                } else if (line.includes(destination)) {
                    secondLineIntersect = line.slice(richmondIdx)

                    // console.log('lineIntersect:');
                    // console.log(secondLineIntersect);
                }
            }
    
        });

        var linesIntersect = firstLineIntersect.concat(secondLineIntersect);

        //console.log(linesIntersect);

        if (linesIntersect.length != []) {
            var firstline = firstLineIntersect.join(' -----> ');
            var secondLine = secondLineIntersect.join(' -----> ');
            var spaces = `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`;
            var totalStops = `${linesIntersect.length-2} stops total`;


            console.log(`orgin: ${origin} \ndestination: ${destination} \n\n${firstline} \n${spaces}||\n${spaces}${secondLine}\n${totalStops}`);
        }
        
    }

    /** TO DO
     * - fix spaces for multi-lines
     * - add reverse line feature
     */
