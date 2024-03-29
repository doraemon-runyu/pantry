const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {type: String, required: true, maxlength: 30},
  storage_tip: {type: String, required: true, maxlength: 300},
  exp_date: {type: Date, required: true},
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
