const express = require('express')
const { Pool } = require('pg');
const app = express()
const port = 5000

const pool = new Pool({
  host: 'localhost',
  database: 'products',
  user: 'yurgandurgan',
  password: 'ay78Dnn2lg0sj9nk3l]3',
  port: 1000,
  idleTimeoutMillis: 10000,
});

app.get('/products', (req, res) => {

  pool.query('select * from products where id < 5', (err, res)=>{
    console.log(err, res);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})