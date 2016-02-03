var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', '$timeout',
  function($scope, $log, $timeout) {

    $scope.name = 'Dan';

    $timeout(function(){

      $scope.name = 'Everybody';

    }, 3000);

}]);