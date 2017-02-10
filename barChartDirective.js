(function(){
  'use strict';

  angular
    .module('csvBar')
    .directive('barChart', [Callback])

  function Callback() {
    return {
      restrict: 'E',
      replace: false,
      scope: {chartData: '='},
      link: (scope, el, attrs) => {
        scope.$watch('chartData', (newData) => {
          console.log(scope.chartData);
          console.log(el);
          console.log(attrs.chartData);
          let data = newData
          let chart = d3.select(el[0])
          chart
          .selectAll('div')
          .data(data)
          .enter()
          .append('div')
          .style('width', d => d * 10 + 'px')
          .text(d => d)
        })

      }
    }
  }
})()
