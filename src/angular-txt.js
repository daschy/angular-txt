/**
 * @ngdoc module
 * @name angular.txt
 * @description
 * angular directive for teletext.io
 */

(function () {
  'use strict';
  var app = angular.module('angular.txt', [])
    .provider('dataTxt', function () {
      this.$get = ['$window', '$rootScope', function ($window, $rootScope) {}];

    })
    .directive('ngDataTxt', function () {
      console.log('ngDataTxt directive loaded');
    });
})();
