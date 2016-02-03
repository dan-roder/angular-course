var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', '$timeout', '$filter',
  function($scope, $log, $timeout, $filter) {

    /*
     * Scope and Interpolation/Use of $timeout

      $scope.name = 'Dan';

      $timeout(function(){

        $scope.name = 'Everybody';

      }, 3000);
    */

    // Directives
    $scope.handle = '';
    $scope.lowercasehandle = function(){
      return $filter('lowercase')($scope.handle);
    }

}]);