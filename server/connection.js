var mongoose = require('mongoose');

var uri = process.env.DATABASE_URL;

// connect to MongoLabs database
mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Errors in database connection'));

db.once('open', function() {
  console.log('MongoDB connection open');
});

module.exports = db;
