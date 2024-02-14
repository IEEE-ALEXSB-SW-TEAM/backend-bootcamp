const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);
  res.status(201).json({ message: 'User created successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
