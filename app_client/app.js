angular.module('melbitApp', ['ngRoute']);

function config ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.view.html',
      controller: 'homeCtrl'
    })
    .otherwise({redirectTo: '/'});
}

angular
  .module('melbitApp')
  .config(['$routeProvider', config]);
