require 'sinatra'
require 'sinatra/reloader'

get '/'do
    "99 bottles of warm water on the wall. Take one down."
    erb(:index)
end


get '/:count'do

    count = params['count']

    if count.to_i > 0
        "#{count} bottles of warm water on the wall. Take one down."
    elsif count.to_i == 0
        "No bottles of warm water on the wall."
    end
    erb(:beer, locals:{
        count: count
    })
end