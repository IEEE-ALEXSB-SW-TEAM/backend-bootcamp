const express = require("express");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Mock user data
const users = [
  {
    id: 1,
    username: "john",
    password: "81dc9bdb52d04dc20036dbd8313ed055",
  },
  {
    id: 2,
    username: "jane",
    password: "81dc9bdb52d04dc20036dbd8313ed055",
  },
];

function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

// Route to register a new user
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username is already taken
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken" });
    }

    // Hash the password
    const hashedPassword = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");

    // Create a new user
    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword,
    };

    // Add the new user to the users array
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password
    const hashedPassword = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");
    if (hashedPassword !== user.password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
