const User = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  const { name, number, wNumber, email, address, course } = req.body;
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    // Create a new user
    const newUser = new User({ name, number, wNumber, email, address, course });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    if (err.code === 11000) {
      // MongoDB duplicate key error
      return res.status(400).json({ message: 'Email already in use.' });
    }
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  getUsers,
  createUser,
};
