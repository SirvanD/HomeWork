require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'planets_app')
  planets = conn.exec("SELECT * FROM planets ORDER BY id ASC;")
  conn.close

  erb(:index, locals: {
    planets: planets
  })
end

get '/planets/new' do
  erb(:new)
end

# SHOW
get '/planets/:id' do
  planet_id = params["id"]
  conn = PG.connect(dbname: 'planets_app')
  planets = conn.exec("SELECT * FROM planets where id=#{planet_id};")
  planet = planets[0]
  conn.close

  erb(:planet_detail, locals: {
  planet: planet
  })
end

# CREATE
post '/planets' do
  params.to_s
  conn = PG.connect(dbname: 'planets_app')
  conn.exec("INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{params['name']}','#{params['image_url']}', '#{params['diameter']}', '#{params['mass']}', '#{params['moon_count']}');")
  conn.close
  redirect '/'
end


# EDIT
get '/planets/:id/edit' do
  sql = "SELECT * FROM planets WHERE id = #{params['id']};"
  conn = PG.connect(dbname: 'planets_app')
  result = conn.exec(sql)
  conn.close
  
  planet = result[0]
  
  erb(:edit,locals: {
    planet: planet
    })
  end
  
  # UPDATE
  put '/planets/:id' do
    
    sql = "UPDATE planets SET name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = #{params['diameter']}, mass = #{params['mass']}, moon_count = #{params['moon_count']} WHERE id = #{params['id']};"
    
    conn = PG.connect(dbname: 'planets_app')
    conn.exec(sql)
    conn.close
    
    redirect "/planets/#{params['id']}"
    
  end

  # DELETE
  delete '/planets/:id/delete' do
    sql = "DELETE FROM planets WHERE id = #{params['id']};"
    conn = PG.connect(dbname: 'planets_app')
    conn.exec(sql)
    conn.close
    redirect '/'
  end