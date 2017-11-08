
var app = angular.module('myapp', []);


app.controller('myController', function getLocation($scope, $rootScope, $http) {

    $http({
        method: 'GET',
        url: 'https://api.fixer.io/latest'
      }).then(function successCallback(response) {
          console.log(response);
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });


});


