const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  database: 'products',
  user: 'yurgandurgan',
  password: 'ay78Dnn2lg0sj9nk3l]3',
  port: 5432,
  idleTimeoutMillis: 10000,
});

module.exports = {
  products: pool.query('select * from products where id < 5', (err, result)=>{
    if (err) throw err;
    res.send(res.rows);
  })

}