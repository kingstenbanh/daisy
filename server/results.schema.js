var mongoose = require('mongoose');

// Mongoose schema definition
var Schema = mongoose.Schema;

// Results Schema
var ResultSchema = new Schema({
  artistName: String,
  url: String,
  timestamp: Number,
  rating: Number,
  cover: String
});

// Result mongoose model definition
var Result = mongoose.model('Results', ResultSchema);

module.exports = Result;
