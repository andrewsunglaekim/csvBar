(function(){
  'use strict';

  angular
    .module('csvBar')
    .controller("Main", ['CsvService', Callback])

  function Callback(CsvService){
    let vm = this
    CsvService.getData().then((data) => {
      vm.data = data  
    })
  }
})()
