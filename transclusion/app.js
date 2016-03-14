var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.people = [{
        name: 'Dan',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    },
    {
        name: 'Steve',
        address: '333 Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '14127'
    },
    {
        name: 'Eric',
        address: '555 Main St.',
        city: 'South Beach',
        state: 'FL',
        zip: '85479'
    }];

    $scope.formattedAddress = function(person) {

        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;

    };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {



}]);

myApp.directive("searchResult", function() {
   return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      personObject: "=",
      formattedAddressFunction: "&"
    },
    transclude: true
  }
});
