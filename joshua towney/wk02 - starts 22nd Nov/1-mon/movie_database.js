// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favMovie = {
    title: 'Star Wars',
    duration: 142,
    starring: ['Mark Hamill',' Harrison Ford',' Carrie Fisher']
} 

function whichMovie() {
    console.log(favMovie.title + ' runs for ' + favMovie.duration + ' minutes. Starring ' + favMovie.starring );
}

// console.log(movies);