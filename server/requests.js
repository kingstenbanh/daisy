var Result = require('./results.schema.js');
var specialChar = require('./specialChar.js');

var saveResult = function(data, callback) {
  // create a new instance of result
  var artist = data.artistName.toLowerCase();
  var newResult = new Result({
    artistName: specialChar(artist),
    url: data.url,
    timestamp: data.timestamp,
    rating: data.rating,
    cover: data.cover
  });
  console.log(newResult);

  // save result to database
  newResult.save(callback);
};

module.exports = saveResult;
