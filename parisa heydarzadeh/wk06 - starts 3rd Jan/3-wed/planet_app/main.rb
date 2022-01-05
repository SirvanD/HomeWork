     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'bcrypt'
require_relative 'models/planet.rb'
require 'pry'


enable :sessions

get '/' do
  
   planets = all_planets()
  erb(:index, locals: { planets: planets})
end


get '/planet/new' do
  erb(:new)
end

get '/planet/:id' do
  planet_id = params['id']
  planet = db_query("select * from planets where id = $1", [planet_id])[0]
  erb(:showpage, locals: {planet: planet})
end


post '/planet' do
  create_planet(params['name'], params['image_url'], params['diameter'], params['mass'], params['moon_count'])
    redirect '/'
  end
  
  
  get '/planet/:id/edit' do
    
    sql = "select * from planets where id = $1;"
    planet = db_query(sql, [params['id']])[0]
    
    
    erb(:edit, locals: {
      planet: planet
      })
    end
    
    
    put '/planet/:id' do
      
      update_planet(
        params['id'],
        params['name'],
        params['image_url'],
        params['diameter'],
        params['mass'],
        params['moon_count']
      )
      
      
      redirect "/planet/#{params['id']}"
      
    end
    
    
    
    
    delete '/planet/:id' do
      delete_planet(params['id'])
      
      redirect "/"
  
  end 
