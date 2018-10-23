const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    date: {
      type: String,
    },
    quantity: {
      type: String,
    }
  },

  {
    timestamps: true
  });

schema.set('toJSON', {
  virtuals: true});
  module.exports = mongoose.model('Reserv', schema);
