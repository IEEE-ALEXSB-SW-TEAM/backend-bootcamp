const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/contact', (req, res) => {
  res.send('Contact page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
