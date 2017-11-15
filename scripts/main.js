
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


                $scope.response = response
             }, function errorCallback(response) {
                ("Sorry no data :(")
             });

            };




            $scope.chosenCurrency2 = "";
            
            $scope.currencies2= ['AUD', 'BGN', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR','GBP', 'HKD', 'HRK','HUF','IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR'];
            
    
              $scope.getSelectedcurrency2 = function(response) {
                chosen2 = $scope.chosenCurrency2;
    

                };
    
        


        $scope.submitForm = function(money) {
        
            if(isNaN(money) == true){
              $scope.data = "Please enter a valid amount"
            }else if ($scope.chosenCurrency2 == "AUD"){
              $scope.data = (money * $scope.response.data.rates.AUD).toFixed(2)
            }else if($scope.chosenCurrency2 == "BGN"){
              $scope.data = (money * $scope.response.data.rates.BGN).toFixed(2)
            }else if($scope.chosenCurrency2 == "CAD"){
              $scope.data = (money * $scope.response.data.rates.CAD).toFixed(2)
            }else if($scope.chosenCurrency2 == "CHF"){
              $scope.data = (money * $scope.response.data.rates.CHF).toFixed(2)
            }else if($scope.chosenCurrency2 == "CNY"){
              $scope.data = (money * $scope.response.data.rates.CNY).toFixed(2)
            }else if($scope.chosenCurrency2 == "CZK"){
              $scope.data = (money * $scope.response.data.rates.CZK).toFixed(2)
            }else if($scope.chosenCurrency2 == "DKK"){
              $scope.data = (money * $scope.response.data.rates.DKK).toFixed(2)
            }else if($scope.chosenCurrency2 == "EUR"){
              $scope.data = (money * $scope.response.data.rates.EUR).toFixed(2)
            }else if($scope.chosenCurrency2 == "GBP"){
              $scope.data = (money * $scope.response.data.rates.GBP).toFixed(2)
            }else if($scope.chosenCurrency2 == "HKD"){
              $scope.data = (money * $scope.response.data.rates.HKD).toFixed(2)
            }else if($scope.chosenCurrency2 == "HRK"){
              $scope.data = (money * $scope.response.data.rates.HRK).toFixed(2)
            }else if($scope.chosenCurrency2 == "IDR"){
              $scope.data = (money * $scope.response.data.rates.IDR).toFixed(2)
            }else if($scope.chosenCurrency2 == "ILS"){
              $scope.data = (money * $scope.response.data.rates.ILS).toFixed(2)
            }else if($scope.chosenCurrency2 == "INR"){
              $scope.data = (money * $scope.response.data.rates.INR).toFixed(2)
            }else if($scope.chosenCurrency2 == "JPY"){
              $scope.data = (money * $scope.response.data.rates.JPY).toFixed(2)
            }else if($scope.chosenCurrency2 == "KRW"){
              $scope.data = (money * $scope.response.data.rates.KRW).toFixed(2)
            }else if($scope.chosenCurrency2 == "MXN"){
              $scope.data = (money * $scope.response.data.rates.MXN).toFixed(2)
            }else if($scope.chosenCurrency2 == "MYR"){
              $scope.data = (money * $scope.response.data.rates.MYR).toFixed(2)
            }else if($scope.chosenCurrency2 == "NOK"){
              $scope.data = (money * $scope.response.data.rates.NOK).toFixed(2)
            }else if($scope.chosenCurrency2 == "NZD"){
              $scope.data = (money * $scope.response.data.rates.NZD).toFixed(2)
            }else if($scope.chosenCurrency2 == "PHP"){
              $scope.data = (money * $scope.response.data.rates.PHP).toFixed(2)
            }else if($scope.chosenCurrency2 == "PLN"){
              $scope.data = (money * $scope.response.data.rates.PLN).toFixed(2)
            }else if($scope.chosenCurrency2 == "RON"){
              $scope.data = (money * $scope.response.data.rates.RON).toFixed(2)
            }else if($scope.chosenCurrency2 == "RUB"){
              $scope.data = (money * $scope.response.data.rates.RUB).toFixed(2)
            }else if($scope.chosenCurrency2 == "SEK"){
              $scope.data = (money * $scope.response.data.rates.SEK).toFixed(2)
            }else if($scope.chosenCurrency2 == "SGD"){
              $scope.data = (money * $scope.response.data.rates.SGD).toFixed(2)
            }else if($scope.chosenCurrency2 == "THB"){
              $scope.data = (money * $scope.response.data.rates.THB).toFixed(2)
            }else if($scope.chosenCurrency2 == "TRY"){
              $scope.data = (money * $scope.response.data.rates.TRY).toFixed(2)
            }else if($scope.chosenCurrency2 == "USD"){
              $scope.data = (money * $scope.response.data.rates.USD).toFixed(2)
            }else if($scope.chosenCurrency2 == "ZAR"){
              $scope.data = (money * $scope.response.data.rates.ZAR).toFixed(2)
            }

            
      };

          
});


