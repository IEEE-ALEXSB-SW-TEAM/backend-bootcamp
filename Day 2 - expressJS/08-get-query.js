const express = require('express');
const app = express();

app.get('/adder', (req, res) => {
  console.log(req.query);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.send(`Result: ${a + b}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
