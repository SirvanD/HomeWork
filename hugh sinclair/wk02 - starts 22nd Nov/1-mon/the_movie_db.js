// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

hotFuzz = {
    title: "Hot Fuzz",
    duration: 181,
    stars: "Simon Pegg, Nick Frost, Martin Freeman, Bill Nighy, Bill Bailey"
}

function movieInfo(movieName){
    console.log(`"${movieName.title}" lasts for ${movieName.duration} minutes. Stars: ${movieName.stars}.`);
}