
var app = angular.module('myapp', []);


app.controller('myController', function getLocation($scope, $rootScope, $http) {


        $scope.chosenCurrency = "";
        
        $scope.currencies= ['AUD', 'BGN', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR','GBP', 'HKD', 'HRK','HUF','IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR'];
        

          $scope.getSelectedcurrency = function() {
            chosen = $scope.chosenCurrency;

             $http({
                 method: 'GET',
                 url: 'https://api.fixer.io/latest?base=' + chosen,
             }).then(function successCallback(response) {
                console.log(response);
             }, function errorCallback(response) {
                ("Sorry no data :(")
             });

            };

            
        
           
          $scope.submitForm = function(money) {
            $scope.data = money * 1.5094;

          };




});


