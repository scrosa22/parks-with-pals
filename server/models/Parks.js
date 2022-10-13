const { Schema, model } = require('mongoose');

const parksSchema = new Schema({
    fullName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  states: {
    type: String,
    required: true,
  },
  });



const Parks = model('Parks', parksSchema);

module.exports = Parks;

