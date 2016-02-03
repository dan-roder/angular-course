var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', '$timeout', '$filter',
  function($scope, $log, $timeout, $filter) {

    $scope.handle = '';
    $scope.lowercasehandle = function(){
      return $filter('lowercase')($scope.handle);
    }

    $scope.characters = 5;

    $scope.rules = [

      { rulename: 'Must be 5 characters' },
      { rulename: 'Must not be used elsewhere' },
      { rulename: 'Must be cool' }
    ];

    $log.log($scope.rules);

}]);