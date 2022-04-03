const mongoose = require('mongoose');
const { packageSchema } = require('./package.model');

const tierSchema = new mongoose.Schema({
  tid: {
    type: Number
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  packages: [packageSchema]
});

const Tier = mongoose.model('Tier', tierSchema);

module.exports = Tier;
