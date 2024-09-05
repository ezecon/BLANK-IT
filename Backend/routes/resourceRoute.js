const express = require('express');
const router = express.Router();
const Course = require('../models/resource'); // Assuming the course schema is in the Course model

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find(); 
    res.status(200).json(courses); 
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving courses. Please try again.' });
  }
});

router.post('/', async (req, res) => {
  const { name, resource} = req.body;

  const newCourse = new Course({
    name, resource
  });

  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (err) {
    res.status(500).json({ message: 'Error adding course. Please try again.' });
  }
});



module.exports = router;
