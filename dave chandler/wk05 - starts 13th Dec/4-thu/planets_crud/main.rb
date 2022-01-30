require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'planets_app')
  'here'
  result = conn.exec('SELECT * FROM planets;')

  erb(:index, locals: {
        planets: result
      })
end

get '/planet_details/:planet_name' do
  planet = params['planet_name']
  conn = PG.connect(dbname: 'planets_app')
  'here'

  sql = "SELECT * FROM planets WHERE name='#{planet}';"
  result = conn.exec(sql)
  puts result[0]
  erb(:planet_details, locals: {
        planet: result[0]
      })
end

get '/add_planet' do
  erb(:add_planet)
end

post '/add_planet' do
  conn = PG.connect(dbname: 'planets_app')
  sql = "INSERT INTO planets (name,image_url,diameter,mass,moon_count)
    VALUES (
        '#{params['planet_name']}',
        '#{params['img_url']}',
        #{params['diameter']},
        #{params['mass']},
        #{params['moons']}
        );"
  conn.exec(sql)
  redirect('/')
end
