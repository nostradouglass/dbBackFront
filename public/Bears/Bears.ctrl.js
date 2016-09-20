angular.module('app')
  .controller('BearsController', BearsController)

function BearsController($scope, $http, $routeParams) {
  
  var vm = this;
 
 $http.get('/api/bears')
  .then(function success(data) {
    vm.bears = data.data
    console.log(vm.bears)
 }, function fail(error) {
      console.log(error)
 })

 vm.removeName = function(id) {
  $http.delete(`/api/bears/` + id)
  
  } 
  

}