angular.module('pugsLife').factory('dataService',
function($http, $q) {

  var service = {};

  service.getData = function(chatMsg) {
    var deferred = $q.defer();

    console.log(chatMsg);
    var url = 'http://api.giphy.com/v1/gifs/search?q=' + chatMsg + '&api_key=dc6zaTOxFJmzC';
    $http.get(url)
    .then(function(response) {
      console.log(response);
      if (response.data.data) {
        var parsedArray = response.data.data.splice(0, 5);
        deferred.resolve(parsedArray);
      } else {
        var parsedArray
      }
    })
    .catch(function(err) {
      deferred.reject(err);
    })
    return deferred.promise;

  }

  return service;


});
