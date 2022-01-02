     
require 'sinatra'
require 'sinatra/reloader'
require 'pg' #talk to DB

get '/' do

  conn = PG.connect(dbname: 'planets_app')
  sql = 'select * from planets;'
  planets = conn.exec(sql)
  planets.each do |planet| 
    puts planet['name']
  end
  
  conn.close
  
  erb :index,locals: {
    planets: planets
  }
end

get '/planets/:id' do 
  planet_id = params['id']
  conn = PG.connect(dbname: 'planets_app')
  sql = "select * from planets where id = #{planet_id};"
  sql2 = "select diameter from planets where id = #{planet_id};"
  sql3 = "select mass from planets where id = #{planet_id};"
  sql4 = "select moon_count from planets where id = #{planet_id};"

  results = conn.exec(sql)
  diameter = conn.exec(sql2)
  mass = conn.exec(sql3)
  moon_count = conn.exec(sql4)
  


planet = results[0]
conn.close
erb :planets, locals:{
  planet: planet,
  diameter: diameter,
  mass: mass,
  moon_count: moon_count
}

end


get '/add_planet' do 

  "please fill in this form"

  erb (:new)
end

post '/input_planet_data' do 

  sql = "insert into planets (name, image_url) values ('#{params["name"]}', '#{params["image_url"]}')"
  
  conn = PG.connect(dbname: 'planets_app')
  results = conn.exec(sql)

  conn.close
  redirect '/'
end

delete '/delete_planet/:planet_id' do 
  sql = "delete from planets where id = #{ params['planet_id'] }"

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close 

  redirect "/"
end

get '/edit_planet/:id' do 

  sql = "select * from planets where id = #{params['id']}"

  conn = PG.connect(dbname: 'planets_app')
  result = conn.exec(sql)
  conn.close

  planet = result[0]

  erb(:edit, locals: { planet: planet })
end

put 'update_planet/:id' do 
  sql = "update planets set name = '#{params['name']}', image_url = '#{params['image_url']}' where id = #{params['id']};"

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close
  
  redirect "/dishes/#{params['id']}"
end

