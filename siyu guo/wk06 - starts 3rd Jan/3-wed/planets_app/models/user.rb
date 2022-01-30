require 'pg'
require 'bcrypt'
def db_query(sql, params = [])
    conn = PG.connect(dbname: 'planets_app')
    result = conn.exec_params(sql, params)
    conn.close
    return result
end

def create_user(email, password)
    password_digest = BCrypt::Password.create(password)
    sql = "INSERT INTO users (email, password_digest) VALUES ($1, $2);"
    db_query(sql, [email, password_digest])
end