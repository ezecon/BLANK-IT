const express = require('express');
const router = express.Router();
const Resource = require('../models/resource'); // Correct model import

router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find(); 
    res.status(200).json(resources); 
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving resources. Please try again.' });
  }
});

router.post('/', async (req, res) => {
  const { name, resource } = req.body;

  const newResource = new Resource({
    name, resource
  });

  try {
    const savedResource = await newResource.save();
    res.status(200).json(savedResource);
  } catch (err) {
    res.status(500).json({ message: 'Error adding resource. Please try again.' });
  }
});

module.exports = router;
