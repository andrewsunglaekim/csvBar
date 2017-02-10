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
      vm.setMinMaxTotal()
    })
    this.enableEdit = ($colIndex, $numIndex, $event) => {
      let input = $event.target.parentElement.children[0].children[0]
      input.value = vm.data[$colIndex][$numIndex]
      focus(`${$colIndex} ${$numIndex}`)
    }
    vm.editData = (colIndex, numIndex, newVal, $event) => {
      vm.data[colIndex][numIndex] = parseInt(newVal)
      vm.totals = vm.getTotals()
      vm.setMinMaxTotal()
      $event.target.children[0].value = ''
    }
    vm.getTotals = () => {
      return vm.data.map((col) => {
        return col.reduce((prev, curr) => {
          return prev + curr
        }, 0)

      })
    }
    vm.calcBarWidth = (num) => {
      let diff = vm.max - vm.min
      let percentage = (1 - (vm.max - num) / diff) * 40
      return {
        width: `${60 + percentage}%`
      }      
    }
    vm.setMinMaxTotal = () => {
      vm.max = Math.max(...vm.totals)
      vm.min = Math.min(...vm.totals)
    }
  }
})()
