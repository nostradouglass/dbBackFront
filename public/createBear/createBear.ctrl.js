angular.module('app')
  .controller('createBearController', createBearController)
  
function createBearController($scope, $http, $route) {
  var vm = this;
  
  $scope.formData = {}
  
  $scope.processForm = function() {
  $http.post('/api/bears', {name: $scope.formData.name, age: $scope.formData.age }).success(function(res){
    $route.reload();
  })
  }
  
  
  
}