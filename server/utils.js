var utils = {};

utils.averageScore = function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total/arr.length;
};

utils.generateAnswer = function(rating, rule) {
  console.log('inside utils.generateAnswer');
  return rule(rating);
};

module.exports = utils;
