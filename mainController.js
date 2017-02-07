(function(){
  'use strict';

  angular
    .module('csvBar')
    .controller("Main", ['CsvService', '$scope', 'focus', Callback])

  function Callback(CsvService, $scope, focus){
    let vm = this
    this.doSomething = ($colIndex, $numIndex) => {
      console.log("doing something")
      focus(`${$colIndex} ${$numIndex}`)
    }
    CsvService.getData().then((data) => {
      vm.data = data
      vm.totals = vm.getTotals()
    })
    vm.onSubmit = (e, colIndex, numIndex) => {
      console.log(e, colIndex, numIndex)
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
