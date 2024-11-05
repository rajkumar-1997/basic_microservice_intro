const express = require('express');
const redis = require('redis');

const app = express();

app.get('/users', (req, res) => {
  res.send('hello from users ms');
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
