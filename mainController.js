(function(){
  'use strict';

  angular
    .module('csvBar')
    .controller("Main", ['CsvService', Callback])

  function Callback(CsvService){
    let vm = this
    CsvService.getData().then((data) => {
      vm.data = data  
      vm.totals = vm.getTotals()
    })
    vm.onClick = (colIndex, numIndex) => {
      console.log(colIndex, numIndex)
    }
    vm.getTotals = () => {
      return vm.data.map((col) => {
        return col.reduce((prev, curr) => {
          return prev + curr
        }, 0)

      })
    }

  }
})()
