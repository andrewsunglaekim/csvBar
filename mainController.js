(function(){
  'use strict';

  angular
    .module('csvBar')
    .controller("Main", ['CsvService', Callback])

  function Callback(CsvService){
    this.name = "bob"
  }
})()
