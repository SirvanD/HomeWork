     
require "sinatra"
require "sinatra/reloader"
require "pg"

get "/" do
  conn = PG.connect( dbname: 'planets_app')
  sql = "SELECT * FROM planets;"
  result = conn.exec(sql)
  conn.close

  erb(:index, locals: {
    planets: result
  })
  
end

get "/planets/:id" do
  planet_id = params["id"]

  conn = PG.connect( dbname: 'planets_app')
  sql = "SELECT * FROM planets WHERE id = #{planet_id}"
  result = conn.exec(sql)
  planet = result[0]
  conn.close
  
  erb(:planet_details, locals: {
    planet: planet
  })

end


get "/add_planet" do

  erb(:add_planet)
  
end

post "/store_new_planet" do
  planet_name = params["name"]
  image_url = params["image_url"]
  diameter = params["diameter"]
  mass = params["mass"]
  moon_count = params["moon_count"]

  conn = PG.connect( dbname: 'planets_app')
  sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{planet_name}', '#{image_url}', '#{diameter}', '#{mass}', '#{moon_count}');"
  conn.exec(sql)
  conn.close

  redirect "/"
  
end

delete "/delete_planet/:planet_id" do

  sql = "DELETE FROM planets WHERE id = #{params["planet_id"]};"

  conn = PG.connect( dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect "/"  
end

get "/edit_planet/:id" do
  
  sql = "SELECT * FROM planets WHERE id = #{params["id"]};"
  conn = PG.connect( dbname: 'planets_app')
  result = conn.exec(sql)
  conn.close

  planet = result[0]
  erb(:edit_planet, locals: {
    planet: planet
  })
end

put "/update_planet/:id" do
  
  sql = "UPDATE planets SET name = '#{params["name"]}', image_url = '#{params["image_url"]}', diameter = '#{params["diameter"]}', mass = '#{params["mass"]}', moon_count = '#{params["moon_count"]}' WHERE id = #{params["id"]};"
  conn = PG.connect( dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect "planets/#{params["id"]}"
  
end

