const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    ingredient: {
      type: String,
    },
    cost: {
      type: String
    },
  },

  {
    timestamps: true
  });

schema.set('toJSON', {
  virtuals: true});
  module.exports = mongoose.model('Desert', schema);
