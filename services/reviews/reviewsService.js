const express = require('express');
const app = express();
const { Client } = require('pg');

let port = 1234;
let client = new Client('postgres://postgres:password@project-catwalk_db_1:5432');

client.connect((err, success) => {
  if (success) {
    console.log('Connected to postgres DB!');
  } else if (err) {
    console.log('Failed to connect to postgres DB, for: ');
    console.error(err);
  }
});


app.get('/', (req, res) => {
  res.send('Responding to GET request at /');
});

app.listen(port, () => {
  console.log(`REVIEWS SERVICE LISTENING AT PORT ${port}`);
});