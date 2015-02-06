'use strict';

angular
  .module('app.services', [])
  .factory('search', search);

function search($http, $state) {
  var answer = '?';
  var info = null;

  function getSource(callback) {
    return $http({
      method: 'GET',
      url: '/api/artists'
    }).then(function(res) {
      var result = [];
      res.data.results.forEach(function(artist) {
        result.push({
          name: artist
        });
      });
      callback(result);
    });
  }

  function getResults(artist, callback) {
    return $http({
      method: 'GET',
      url: '/api/artists/' + artist
    }).then(function(res) {
      //set data right away
      console.log('url: ', res.data.url);
      setInfo({
        url: res.data.url,
        cover: res.data.cover
      });
      setAnswer((res.data.answer) ? 'YES' : 'NO');
      console.log('data', res.data);
      callback();
      getAnswer();
      $state.go('result')
    }).catch(function() {
      console.error('something screwed up');
    });
  }

  function setInfo(inf) {
    info = inf;
  }

  function getInfo() {
    return info;
  }

  function getAnswer() {
    return answer;
  }

  function setAnswer(ans) {
    console.log('setting answer to ' + ans);
    answer = ans;
  }

  var service = {
    getSource: getSource,
    getResults: getResults,
    setInfo: setInfo,
    getInfo: getInfo,
    getAnswer: getAnswer
  };

  return service;
}
