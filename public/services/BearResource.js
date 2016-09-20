angular.module('app')
  .factory('BearService', BearService)

function BearService($resource) {
  return $resource('/api/bears/', 
    {
    'get':{
      method: 'GET'
    }
  })
}