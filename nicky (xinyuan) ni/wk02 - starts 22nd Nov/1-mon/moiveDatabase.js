var movies = [
    {
       title: 'A New Hope',
       duration: 121,
       starring: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Peter Cushing', 'Alec Guinness']
   },
    {
       title: 'The Empire Strikes Back',
       duration: 124,
       starring: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Billy Dee Williams', 'Anthony Daniels']
   },
    {
       title: 'Return of the Jedi',
       duration: 132,
       starring: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Frank Oz', 'Peter Mayhew']
    }
]

var userMovie = prompt ("Enter a movie title!"); 

var movie = movies.find(movie => movie.title === userMovie);


alert('Puff! The "' + movie['title'] +'" lasts for ' + movie['duration'] + ' minutes. Stars: ' + movie['starring'] + '......')












