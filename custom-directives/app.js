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

  var self = this;
  this.name = 'John Doe';

  this.namelength = function(){

    return self.name.length;

  }

});

myApp.controller('mainController', ['$scope', '$log', '$location', 'nameService',
  function($scope, $log, $location, nameService) {


}]);

myApp.controller('secondController', ['$scope', '$log', '$location', '$routeParams', 'nameService',
  function($scope, $log, $location, $routeParams, nameService) {



}]);

myApp.directive('searchResult', function(){
  // Runs during compile
  return {
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    replace: true,
    templateUrl: 'directives/searchresult.html',
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {

    }
  };
});