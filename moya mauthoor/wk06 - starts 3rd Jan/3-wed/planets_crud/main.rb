require "sinatra"
require "sinatra/reloader"
require "pg"

require_relative "models/planet.rb"

get "/" do

  result = db_query("SELECT * FROM planets ORDER BY name;")  

  erb(:index, locals: {
    planets: result
  })
  
end

# To access form to input a new planet
get "/planets/new" do

  erb(:new)

end

# Read individual planets
get "/planets/:id" do

  planet = db_query("SELECT * FROM planets WHERE id = $1", [params["id"]]).first
  
  erb(:show_planet, locals: {
    planet: planet
  })

end

# To access form to edit individual planets
get "/planets/:id/edit" do

  planet = db_query("SELECT * FROM planets WHERE id = $1;", [params["id"]]).first
  
  erb(:edit, locals: {
    planet: planet
  })

end

# To create planet in database
post "/planets" do

  # create_planet(params["name"], params["image_url"], params["diameter"], params["mass"], params["moon_count"])

  db_query("INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ($1, $2, $3, $4, $5);", [
    params["name"],
    params["image_url"],
    params["diameter"],
    params["mass"],
    params["moon_count"]
  ])

  redirect "/"
  
end

# To delete planet from database
delete "/planets/:planet_id" do

  db_query("DELETE FROM planets WHERE id = $1;", [params["planet_id"]])

  redirect "/"  
end

# To update a planet
put "/planets/:id" do

  db_query("UPDATE planets SET name = $1, image_url = $2, diameter = $3, mass = $4, moon_count = $5 WHERE id = $6;", [
    params["name"],
    params["image_url"],
    params["diameter"],
    params["mass"],
    params["moon_count"],
    params["id"]
  ])
  
  redirect "/planets/#{params["id"]}"
  
end

