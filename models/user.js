const mongoose = require('./db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  phone: String,
  state: Boolean,
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('users',userSchema)
