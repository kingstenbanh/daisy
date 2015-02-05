var express = require('express');
var path = require('path');
var pitchfork = require('./pitchfork.js');
var utils = require('./utils.js');

var Result = require('./results.schema.js');
var requests = require('./requests.js');

var router = express.Router();
var fs = require('fs');

router.use(function(req, res, next) {
  console.log('Something is happening');
  nex(); // make sure we go to the next routes and dont' stop here
});

// GET homepage
route.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET all artists
router
  .route('/artists')
  .get(function(req, res) {
    var artistsFile = path.join(__dirname, '../artist.json');
    fs.readFile(artistFile, function(err, data) {
      res.send(JSON.parse(data));
    });
  });

// GET single artist
router
  .route('/artists/:artist_id')
  .get(function(req, res) {
    var artist = req.params.artist_id.toLowerCase();

    Results.find({artistName: artist}, function(error, data) {
      if (data.length) {
        if (data[0].artistName === artist) {
          console.log('found artist');

          // provide answer to user base on rating
          var answer = false;
          if (data.rating > 7) {
            answer = true;
          }

          var artistInfo = {
            'answer': answer,
            'url': data[0].url,
            'cover': data[0].cover
          }
          res.send(artistInfo);
        } else {
          pitchfork(req.params.artist_id, function(data) {
            console.log('in pitchfork API');
            var answer = false;
            console.log(data);
            answer = data.rating > 7 ? true : false;

            var artistInfo = {
              'answer': answer,
              'url': data.url,
              'cover': data.cover
            }
            res.send(artistInfo);

            // save to database
            requests(data, function(error) {
              if (error) console.log('ERROR');
              else {
                console.log('success', data);
              }
            });
          })
        }
      }
    });

  });
