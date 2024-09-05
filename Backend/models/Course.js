const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  URI: {
    type: String,
    required: true,
  },
  instructor: {
    econ: { type: Boolean, default: false },
    science: { type: Boolean, default: false },
    art: { type: Boolean, default: false },
  },

  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Course', courseSchema);
