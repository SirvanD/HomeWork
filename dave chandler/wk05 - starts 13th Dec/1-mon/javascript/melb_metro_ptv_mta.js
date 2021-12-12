//ALGORITHM FOR BUILDING AND RETURNING STATION LISTS
//class to hold the start and end route stations
class route{
    constructor(){
        this.start_stn_name = '',
        this.start_line_i = '', 
        this.start_stn_i = '', 
        this.start_line_inter_i = '',
        this.end_stn_name = '',
        this.end_line_i = '', 
        this.end_stn_i = '', 
        this.end_line_inter_i = '',
        this.route_connector = " --> ",
        this.route = '',
        this.switch_lines = ''
        this.interconnect = 'Richmond'
    }
}
let trip = ''

//name = string, stations = []
class line {
    constructor(name, stations){
        this.line_name = name,
        this.stations = stations
    }
}

//build network
let network = []
network.push(new line ('alamein',['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']));
network.push(new line ('glen_waverly',['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']));
network.push(new line ('sandringham',['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']));
let any_issues = false;

//pass in station objects and this updates the route object.  It also passes back true/false if it had issues finding the terminal station names
function find_stations(start_stn_name, dest_stn_name){
    trip = new route();
    trip.start_stn_name = start_stn_name;
    trip.end_stn_name = dest_stn_name;
    any_issues = false;
    let i;

    //find the origin station and line details
    network.forEach((line, index) => 
       (i = line.stations.indexOf(start_stn_name))!= -1 ? 
            (trip.start_line_i = index, 
            trip.start_stn_i = i,
            trip.start_line_inter_i = line.stations.indexOf(trip.interconnect))
        : any_issues = true
            );

    //find the destination station and line details
    network.forEach((line, index) => 
       (i = line.stations.indexOf(dest_stn_name))!= -1 ? 
            (trip.end_line_i  = index, 
            trip.end_stn_i = i,
            trip.end_line_inter_i = line.stations.indexOf(trip.interconnect))
        : any_issues = true
            );
    
            trip.start_line_i == trip.end_line_i ? trip.switch_lines = false : trip.switch_lines = true
    console.log(any_issues);
    return any_issues;
}

//fetch the names of the station and handle reverse order
function fetch_station_names(line, start_station, end_station){
    return start_station > end_station ? (line.stations.slice(end_station, start_station+1)).reverse() : (line.stations.slice(start_station,end_station+1))
}

//build the route as an array so it can easily be used for DOM manipulation
function build_route(){

    if (!trip.switch_lines){
        trip.route = fetch_station_names(network[trip.start_line_i], trip.start_stn_i, trip.end_stn_i);
        
    } else {
        
        //crosses two lines
        trip.route = fetch_station_names(network[trip.start_line_i], trip.start_stn_i, trip.start_line_inter_i);
        //remove richmond as the second half of the journey ALSO has richmond/interconnecting station name
        printToConsole();
        trip.route.pop();
        trip.route = trip.route.concat(fetch_station_names(network[trip.end_line_i], trip.end_line_inter_i, trip.end_stn_i));
        printToDom(true);
    }  
};

function printToConsole() {
    let end_spacing = (trip.route.at(-1).length / 2) + 1
    let line_1_string = trip.route.join(trip.route_connector)
    console.log(line_1_string)
    console.log(" ".repeat(line_1_string.length - end_spacing) + "||")
    console.log(" ".repeat(line_1_string.length - end_spacing - end_spacing + 2) + fetch_station_names(network[trip.end_line_i], trip.end_line_inter_i, trip.end_stn_i).join(trip.route_connector))
}

function printToDom(printRoute){
    document.getElementById('stationList').innerHTML = '';
    if(printRoute){
        trip.route.forEach(station => document.getElementById('stationList').innerHTML += `<div class='station-name'>${station}</div>`)
    }
}

//AUTOCOMPLETE ON INPUT FORMS
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
        var pos = arr[i].toUpperCase().indexOf(val.toUpperCase());
          /*check if the item starts with the same letters as the text field value:*/
          if (pos > -1) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = arr[i].substr(0, pos);
            b.innerHTML += "<strong>" + arr[i].substr(pos, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(pos + val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;

                userSelections();
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 9) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/

          userSelections();
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/

            if (x) {
                x[currentFocus].click();

            }
          }
        }
    });

    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });

  }
  
  function userSelections(){
    let originSelect = document.getElementById('originInput').value;
    let destinationSelect = document.getElementById('destInput').value;
      //only do something if bot inputs have strings

    if(originSelect.trim().length !=0 && destinationSelect.trim().length !=0){
       
        //only do something if those strings match station names
        if(find_stations(originSelect, destinationSelect)){
        
            build_route();
        }
    }
  }

const userInputOrigin = document.getElementById("originInput");
const userInputDest = document.getElementById("destInput");

  /*An array containing all the country names in the world:*/
  var stations = [];
    network.forEach(array=> stations = stations.concat(array.stations));

  /*initiate the autocomplete function on the "originInput" element, and pass along the stations array as possible autocomplete values:*/
  autocomplete(userInputOrigin, stations);
  autocomplete(userInputDest, stations);