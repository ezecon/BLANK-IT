const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  classno: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Topic', topicSchema);
