const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  pid: {
    type: Number
  },
  cost: {
    type: Number
  },
  name: {
    type: String
  },
  serviceList: [String]
});

const Package = mongoose.model('Package', packageSchema);

module.exports = { Package, packageSchema };
