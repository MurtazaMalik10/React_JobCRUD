// backend/models/Application.js

const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  dob: Date,
  job: String,
  education: String,
  experience: String
});

module.exports = mongoose.model('Application', applicationSchema);
