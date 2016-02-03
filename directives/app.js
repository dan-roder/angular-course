var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', '$timeout', '$filter', '$http',
  function($scope, $log, $timeout, $filter, $http) {

    $scope.handle = '';
    $scope.lowercasehandle = function(){
      return $filter('lowercase')($scope.handle);
    }

    $scope.characters = 5;

    $scope.rules = [];

    $http.get('http://api.openweathermap.org/data/2.5/weather?q=20036&APPID=8f8e372014a30753aa482c8357a26fdc')
      .success(function(result){
        $scope.rules = result;
        $log.log(result);
      })
      .error(function(data, status){
        $log.log(data, status);
      })

}]);