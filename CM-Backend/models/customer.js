// models/Customer.js

const mongoose = require('mongoose');

// Define customer schema
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure email uniqueness
  },
  phone: {
    type: String,
    required: true
  }
});

// Create and export Customer model
module.exports = mongoose.model('Customer', customerSchema);
