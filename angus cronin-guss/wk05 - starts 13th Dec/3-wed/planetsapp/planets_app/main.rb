     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  # we need to grab stuff from the db
  conn = PG.connect(dbname: 'planets')
  sql = 'select * from planets order by name;'
  result = conn.exec(sql)
  conn.close

  erb :index, locals: { planet_names: result }
end


get '/planets/:id' do
  planet_id = params['id']
  conn = PG.connect(dbname: 'planets')
  sql = "select * from planets where id = #{planet_id};"
  result = conn.exec(sql) 
  planet = result[0] 
  conn.close

  erb(:show, locals: { planet_names: planet})
end

get '/upload' do
  
erb :upload
end

post '/upload_planet' do
 sql = "insert into planets (name, image_url, diameter, mass, moon_count) values ('#{params['name']}', '#{params['image_url']}', '#{params['diameter']}', '#{params['mass']}', '#{params['moon_count']}')"
 conn = PG.connect(dbname: 'planets')
 conn.exec(sql)
 conn.close
redirect '/'
end 


