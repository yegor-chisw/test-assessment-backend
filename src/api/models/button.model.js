const mongoose = require('mongoose');

const buttonSchema = new mongoose.Schema({
  btnClass: {
    type: String
  },
  textButton: {
    type: String
  }
});

const Button = mongoose.model('Button', buttonSchema);

module.exports = Button;
