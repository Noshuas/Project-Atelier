const express = require('express');
const app = express();

let port = 1234;

app.get('/', (req, res) => {
  res.send('Responding to GET request at /');
});

app.listen(port, () => {
  console.log(`REVIEWS SERVICE LISTENING AT PORT ${port}`);
});