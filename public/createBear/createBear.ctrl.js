angular.module('app')
  .controller('createBearController', createBearController)
  
function createBearController() {
  var vm = this;
  
  vm.createBear = function() {
    console.log('create a bear')
  }
}