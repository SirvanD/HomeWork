     
require 'sinatra'
require 'sinatra/reloader'
require 'pg' #talk to DB
require 'pry'

require_relative 'models/planet.rb'




get '/' do

  planets = all_planets()
  
  erb :index,locals: {
    planets: planets
  }
end

get '/planets/:id' do 
  planet_id = params['id']
  planet = db_query("select * from planets where id = $1", [planet_id]).first
  

erb :planets, locals:{
  planet: planet
}

end


get '/add_planet' do 

  "please fill in this form"

  erb (:new)
end

post '/input_planet_data' do 

  # sql = "insert into planets (name, image_url) values ('#{params["name"]}', '#{params["image_url"]}')"
  
  # conn = PG.connect(dbname: 'planets_app')
  # results = conn.exec(sql)

  # conn.close
  create_planet(params['name'], params['image_url'])
  redirect '/'
end

delete '/delete_planet/:planet_id' do 
  delete_planet(params['id'])
  redirect "/"
end

get '/edit_planet/:id' do 

  # sql = "select * from planets where id = #{params['id']}"

  # conn = PG.connect(dbname: 'planets_app')
  # result = conn.exec(sql)
  # conn.close

  # planet = result[0]

  sql = "select * from planets where id = $1;"
  planet = db_query(sql, [params['id']]).first

  erb(:edit, locals: { planet: planet })
end

put '/update_planet/:id' do 
 
  update_planet(
    params['name'],
    params['image_url'],
    params['id']
  )
 
 
  # sql = "update planets set name = '#{params['name']}', image_url = '#{params['image_url']}' where id = #{params['id']};"

  # conn = PG.connect(dbname: 'planets_app')
  # conn.exec(sql)
  # conn.close
  
  redirect "/planets/#{params['id']}"
end

