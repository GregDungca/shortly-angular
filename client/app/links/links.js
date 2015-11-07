angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
      .then( function successCallback(response) {
        $scope.data.links = response.data;
      }, function errorCallback(response) {
        console.log('Error: ' + response);
      });
  }

  $scope.getLinks();



});
