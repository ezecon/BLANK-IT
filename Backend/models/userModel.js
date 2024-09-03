const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  wNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('User', userSchema);
