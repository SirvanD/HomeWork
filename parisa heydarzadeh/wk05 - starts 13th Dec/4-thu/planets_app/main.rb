     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'




get '/' do
  
conn = PG.connect(dbname: 'planets_app')
sql = "select * from planets;"
result = conn.exec(sql)
conn.close

erb(:index, locals: {
   planets: result
   })
end




# when clicking on plantes showing the details of planets
get '/planets/:id' do
  planet_id = params['id']
  conn = PG.connect(dbname: 'planets_app')
  sql = "select * from planets where id = #{planet_id};"
  result = conn.exec(sql)
  planet = result[0]
  conn.close
  
  erb(:display, locals: { planet: planet })
end





post '/input_planet_data' do
return params["name"]
return params['image_url']
sql ="insert into planets (name, image_url) values ('#{params['name']}', '#{params['image_url']}');"
conn = PG.connect(dbname: 'planet_app')
  result = conn.exec(sql)
  conn.close

  erb(:new)
end