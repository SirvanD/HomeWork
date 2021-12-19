     
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

conn = PG.connect(dbname: 'planets_app')
sql = "select * from planets where id = #{planet_id};"
results = conn.exec(sql)

planet = results[0]
conn.close
erb :planets, locals:{
  planet: planet
}

end


get '/add_planet' do 

  "please fill in this form"

  erb (:new)
end

post '/input_planet_data' do 

  sql = "insert into planets (name, image_url) values ('#{params["name"]}')"
  
  return sql
end



