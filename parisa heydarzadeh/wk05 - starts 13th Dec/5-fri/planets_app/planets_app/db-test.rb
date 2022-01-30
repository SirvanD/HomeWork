require 'pg'
require 'pry'
conn = PG.connect(dbname: 'planet_app')
sql = "SELECT * FROM planets"
result = conn.exec(sql)


 conn.close
