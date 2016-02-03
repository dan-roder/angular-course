var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })
    .when('/second/', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })
    .when('/second/:num', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

});

myApp.controller('mainController', ['$scope', '$log', '$location',
  function($scope, $log, $location) {

    $scope.name = 'Main';

}]);

myApp.controller('secondController', ['$scope', '$log', '$location', '$routeParams',
  function($scope, $log, $location, $routeParams) {

    $scope.num = $routeParams.num || 1;


}]);