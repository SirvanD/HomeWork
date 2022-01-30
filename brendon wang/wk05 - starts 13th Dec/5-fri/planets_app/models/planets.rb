def db_query(sql, params = [])
    conn = PG.connect(dbname: 'goodfoodhunting')
    results = conn.exec_params(sql, params)
    conn.close
    return results
  end