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

    $scope.$watch('handle', function(newValue, oldValue) {

      $log.info('Changed');
      $log.log('Old: ' + oldValue);
      $log.log('New:' + newValue);

    });

    $timeout(function(){

      $scope.handle = 'newtwitterhandle';
      $log.log('Scope changed');

    }, 3000);

}]);