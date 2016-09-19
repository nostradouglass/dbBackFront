angular.module('app')
  .controller('BearsController', BearsController)

function BearsController() {
  
  var vm = this;
  
  
  vm.bears = [
    {
      name: "Smokey",
      age: 100,
      id: 12345
    },
    {
      name: 'Yogi',
      age: 50,
      id: 6789
    }
  ]
  
}