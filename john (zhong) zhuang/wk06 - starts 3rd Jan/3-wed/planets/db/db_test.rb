require 'pg'
# https://github.com/ged/ruby-pg
require 'pry'

conn = PG.connect(dbname: 'planets_app')
planets = conn.exec("SELECT * FROM planets;")
binding.pry