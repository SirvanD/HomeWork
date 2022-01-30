require 'pg'
require 'pry'

conn = PG.connect(dbname: 'movies3')
sql = "SELECT * FROM movies"
result = conn.exec(sql)

binding.pry
conn.close