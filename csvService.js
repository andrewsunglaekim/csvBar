(function(){
  angular
    .module('csvBar')
    .service('CsvService', ['$http', Callback])

  function Callback($http){
    console.log("service callback hit")
  }
})()
