const mongoose = require('mongoose');

// Define the schema for the credit card information
const CreditCardSchema = new mongoose.Schema({
  card_number: {
    type: String,
    required: true,
    unique: true
  },
  card_holder: {
    type: String,
    required: true
  },
  expiry_date: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const CreditCard = mongoose.model('CreditCard', CreditCardSchema);

module.exports = CreditCard;
