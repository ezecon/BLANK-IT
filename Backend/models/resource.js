const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  resource: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Resource', resourceSchema);
