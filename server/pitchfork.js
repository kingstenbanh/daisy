var p = require('pitchfork');
var utils = require('./utils.js');

var pitchfork = function(input, callback) {
  var result = new p.Search(input);

  result.on('ready', function(pitchforkResults) {
    var data = {};
    var arr = [];
    data.artistName = pitchforkResults[0].attributes.artist;
    data.url = pitchforkResults[0].attributes.url;
    data.timestamp = Date.now();

    pitchforkResults.forEach(function(review, idx) {
      arr.push(review.attributes.score);
    });
    data.rating = utils.averageScore(arr);

    callback(data);
  });
}

module.exports = pitchfork;
