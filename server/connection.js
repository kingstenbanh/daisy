var mongoose = require('mongoose');

var uri = 'mongodb://admin:admin@ds041157.mongolab.com:41157/cobalt_records';

// connect to MongoLabs database
mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Errors in database connection'));

db.once('open', function() {
  console.log('MongoDB connection open');
});

module.exports = db;
