(function(){
  angular
    .module('csvBar')
    .service('CsvService', ['$http', Callback])

  function Callback($http){
    console.log("service callback hit")
    $http.get('./random.csv').then((data)=>{
      let csvArray = data.data.trim().split('\n').map((rowStr) => {
        return rowStr.split(',')
      })
      console.log(csvArray)
      let colCsvArray = []
      for(let i = 0; i < csvArray[0].length; i++){
        colCsvArray.push([])
      }
      csvArray.forEach((row) => {
        row.forEach((num, i) => {
          colCsvArray[i].push(num)
        })
      })
      console.log(colCsvArray)
    })  
  }
})()
