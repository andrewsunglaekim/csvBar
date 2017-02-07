(function(){
  angular
    .module('csvBar')
    .service('CsvService', ['$http', Callback])

  function Callback($http){
    console.log("service callback hit")
    $http.get('./random.csv').then((data)=>{
      console.log(data)
    })
  }
})()
