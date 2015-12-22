angular.module('pugsLife').controller('pugController',
function($scope, dataService) {
  $scope.name= "Doug the Pug";


  $scope.addName = function(addedName) {
    $scope.name = addedName;
  }

  $scope.addMessage = function(chatMessage) {
    dataService.getData(chatMessage)
    .then(function(response) {
      console.log(response, 'FROM MY CONTROLLER');
      $scope.gifs = response;
      if (!response.length)
        $scope.noResults = true;
      else
        $scope.noResults = false;

  })
    .catch(function(err) {
      console.log(err);
    })
  };


});
