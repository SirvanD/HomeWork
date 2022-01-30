require "httparty"
require "pg"


def db_query(sql, params = [])
    conn = PG.connect(dbname: 'movies_app')
    result = conn.exec_params(sql, params) #always returns an array
    conn.close
    return result
end

def all_movies()
    db_query("SELECT * FROM movies ORDER BY name;")
end

def create_movie()
    sql = "INSERT INTO movies (name, image_url) VALUES ($1, $2);"
    db_query(sql, [title, image_url])
end 

# def omdb_query(url)
#     res = HTTP.get(url)
#     return res
# end