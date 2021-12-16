     
require 'sinatra'
require "sinatra/reloader"
require "pg"


get '/' do
  conn = PG.connect(dbname: 'planets_app')
  sql = "select * FROM planets;"
  planets = conn.exec(sql).to_a()
  conn.close
  erb :index, locals:{
    planets: planets,
  }
end

get "/share_planet" do
  erb :shareplanet
end

get "/planetdetails/:id" do 
  planet_id = params["id"]
  conn = PG.connect(dbname: 'planets_app')
  sql = "select * FROM planets where id = '#{planet_id}';"
  planet = conn.exec(sql)[0]
  erb :planetdetails, locals: {
    planet: planet,
  }
end

post "/addplanet" do 
  planet_name = params["name"]
  planet_image_url = params["image_url"]
  planet_diameter = params["diameter"]
  planet_mass = params["mass"]
  planet_moon_count = params["moon_count"]
  sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{planet_name}', '#{planet_image_url}', '#{planet_diameter}', '#{planet_mass}', '#{planet_moon_count}')"
  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  redirect "/"
end


