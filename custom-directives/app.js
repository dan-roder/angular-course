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

myApp.service('nameService', function(){

});

myApp.controller('mainController', ['$scope', '$log', '$location', 'nameService',
  function($scope, $log, $location, nameService) {

    $scope.person = {
      name: 'Big ol bag a dicks',
      address: 'Somewhere where dicks are'
    };

}]);

myApp.controller('secondController', ['$scope', '$log', '$location', '$routeParams', 'nameService',
  function($scope, $log, $location, $routeParams, nameService) {



}]);

myApp.directive('searchResult', function(){
  // Runs during compile
  return {
    restrict: 'AECM', // E = Element, A = Attribute, C = Class, M = Comment
    replace: true,
    templateUrl: 'directives/searchresult.html',
    scope: {
      personObject: "="
    }, // {} = isolate, true = child, false/undefined = no change
    // name: '',
    // priority: 1,
    // terminal: true,
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {

    }
  };
});