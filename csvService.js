(function(){
  angular
    .module('csvBar')
    .service('CsvService', ['$http', Callback])

  function Callback($http){
    let csvData;
    let getData = () => {
      let request = $http.get('./random.csv').then((data)=>{
        let csvArray = data.data.trim().split('\n').map((rowStr) => {
          return rowStr.split(',')
        })
        let colCsvArray = []
        for(let i = 0; i < csvArray[0].length; i++){
          colCsvArray.push([])
        }
        csvArray.forEach((row) => {
          row.forEach((num, i) => {
            colCsvArray[i].push(num)
          })
        })
        return colCsvArray
      }) 
      return request
    }
    return { getData }
  }
})()
