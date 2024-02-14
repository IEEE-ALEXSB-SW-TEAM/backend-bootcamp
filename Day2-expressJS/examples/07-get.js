const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];

  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
