var movie = {
  title: "Moana",
  duration: 90,
  stars: ["Moana", "Maui", "Chief Tui", "Grand ma Tala"],
};

function printMovieInfo() {
  console.log(
    `The movie ${movie.title} lasts for ${movie.duration} , stars ${movie.stars[0]} ${movie.stars[1]} ${movie.stars[2]} ${movie.stars[3]}`
  );
}

printMovieInfo();
