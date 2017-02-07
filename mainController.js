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
    vm.onSubmit = (colIndex, numIndex, newVal, $event) => {
      console.log(vm.getTotals())
      vm.data[colIndex][numIndex] = parseInt(newVal)
      console.log(vm.getTotals())
      $event.target.children[0].value = ''
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
