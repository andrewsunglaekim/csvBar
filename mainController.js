(function(){
  'use strict';

  angular
    .module('csvBar')
    .controller("Main", ['CsvService', Callback])

  function Callback(CsvService){
    this.data = CsvService.getData().then((data) => {
      console.log(data)
    })
  }
})()
