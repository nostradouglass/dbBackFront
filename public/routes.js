angular.module('app')
  .config(routes)

function routes($routeProvider, $locationProvider) {
  
  $routeProvider
    .when('/', {
    templateUrl: '/app/home/home.partial.html',
    controller: 'homeController',
    controllerAs: 'homeCtrl'
  })
  .when('/Bears', {
    templateUrl: '/app/Bears/Bears.partial.html',
    controller: 'BearsController',
    controllerAs: 'BearsCtrl'
  })
  .when('/createBear', {
    templateUrl: '/app/createBear/createBear.partial.html',
    controller: 'createBearController',
    controllerAs: 'createBearCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
  
  $locationProvider.html5Mode(true);
  
}