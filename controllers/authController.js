const User = require('../models/User');

// Register a new user
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create and save the new user
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

// User login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check for admin credentials
    if (username === 'admin@gmail.com' && password === 'admin@123') {
      return res.status(200).json({ message: 'Admin login successful', isAdmin: true });
    }

    // Check for normal user credentials
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful', isAdmin: false });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};
