(function(){
  'use strict';

  angular
    .module('csvBar')
    .controller("Main", ['CsvService', 'focus', Callback])

  function Callback(CsvService, focus){
    let vm = this
    CsvService.getData().then((data) => {
      vm.data = data
      vm.totals = vm.getTotals()
    })
    this.enableEdit = ($colIndex, $numIndex, $event) => {
      let input = $event.target.parentElement.children[0].children[0]
      input.value = vm.data[$colIndex][$numIndex]
      focus(`${$colIndex} ${$numIndex}`)
    }
    vm.editData = (colIndex, numIndex, newVal, $event) => {
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
