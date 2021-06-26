const express = require('express')
const app = express()
const port = 5000
const db = require('./database.js');

app.get('/products', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})