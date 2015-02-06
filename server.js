var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = require('./server/routes.js');
var connection = require('./server/connection.js');

var app = express();
var port = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// apply the routes to our application
app.use('/api', router);

app.listen(port, function() {
  console.log('Express server listening on port ', port);
});
