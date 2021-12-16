     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do

  conn = PG.connect(dbname: 'planets_app')

  sql = 'select * from planets;'

  result = conn.exec(sql)

  conn.close

  erb :index, locals: {
    planets: result
  }
end





