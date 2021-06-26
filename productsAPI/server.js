const express = require('express')
const app = express()
const port = 5000
const db = require('./database.js');

app.get('/products', (req, res) => {
  pool.query('select * from products where id < 5', (err, result)=>{
    if (err) throw err;
    res.send(res.rows);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})