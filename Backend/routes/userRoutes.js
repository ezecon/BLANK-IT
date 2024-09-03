const express = require('express');
const router = express.Router();
const User = require('../models/CoursePurchase');

// POST request to handle course purchases
router.post('/', async (req, res) => {
  const { name, number, wNumber, email, address, course } = req.body;

  // Check if the user with the same email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already in use. Please use a different email.' });
  }

  // Create a new user
  const newUser = new User({
    name,
    number,
    wNumber,
    email,
    address,
    course
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error registering user. Please try again.' });
  }
});

module.exports = router;
