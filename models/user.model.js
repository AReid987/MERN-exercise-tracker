const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required'
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
