const express = require('express');
const crypto = require('crypto');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Mock user data
const users = [
  {
    id: 1,
    username: 'john',
    password: '81dc9bdb52d04dc20036dbd8313ed055',
  },
  {
    id: 2,
    username: 'jane',
    password: '81dc9bdb52d04dc20036dbd8313ed055',
  },
];

// Route to register a new user
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username is already taken
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return res.status(409).json({ message: 'Username already taken' });
    }

    // Hash the password
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    // Create a new user
    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword,
    };

    // Add the new user to the users array
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
    if (hashedPassword !== user.password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
