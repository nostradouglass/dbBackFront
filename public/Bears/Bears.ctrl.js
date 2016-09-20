angular.module('app')
  .controller('BearsController', BearsController)

function BearsController($scope, $http, $routeParams, $route) {
  
  var vm = this;
 
 $http.get('/api/bears')
  .then(function success(data) {
    vm.bears = data.data
    console.log('success')
 }, function fail(error) {
      console.log(error)
 })

 vm.removeName = function(_id) {
     $http.delete('/api/bears/' + _id).then(function(res){
        $route.reload();
     }, function(err) {
         console.log(err);
     })
  
  } 
  

}