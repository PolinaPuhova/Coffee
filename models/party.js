const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    number: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    date: {
      type: String
    }
  },

  {
    timestamps: true
  });

schema.set('toJSON', {
  virtuals: true});
  module.exports = mongoose.model('Party', schema);
