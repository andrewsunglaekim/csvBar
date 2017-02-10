(function(){
  angular
    .module('csvBar')
    .service('CsvService', ['$http', Callback])

  function Callback($http){
    let csvData;
    let getData = () => {
      // request to csv file
      let request = $http.get('./random.csv').then((data)=>{
        // trim, split, map data to get array of arrays
        let csvArray = data.data.trim().split('\n').map((rowStr) => {
          return rowStr.split(',')
        })
        // create a new array to store by column rather than by row
        let colCsvArray = []
        for(let i = 0; i < csvArray[0].length; i++){
          colCsvArray.push([])
        }
        csvArray.forEach((row) => {
          // for each number in a row, place where it is indexed in to that column
          row.forEach((num, i) => {
            colCsvArray[i].push(parseInt(num))
          })
        })
        return colCsvArray
      })
      // return the request so that promises can be chained
      return request
    }
    // es6 object shorthand syntax so getData can be called on anything that leverages the service
    return { getData }
  }
})()
