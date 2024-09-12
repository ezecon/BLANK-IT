const express = require('express');
const router = express.Router();
const Topic = require('../models/topic'); // Correct model import

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find(); 
    res.status(200).json(topics); 
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving topics. Please try again.' });
  }
});

router.post('/', async (req, res) => {
  const { name, topic,classno} = req.body;

  const newTopic = new Topic({
    name, topic,classno
  });

  try {
    const savedTopic = await newTopic.save();
    res.status(200).json(savedTopic);
  } catch (err) {
    res.status(500).json({ message: 'Error adding topic. Please try again.' });
  }
});

module.exports = router;
