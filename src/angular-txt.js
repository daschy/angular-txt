/**
 * @ngdoc module
 * @name angular.txt
 * @description
 * angular directive for teletext.io
 */

(function () {
  'use strict';

  function requireDep() {
    try {
      return require('txt.js'); // Using nw.js or browserify?
    } catch (e) {
      throw new Error('Please install txt.js via npm. Please reference to: https://github.com/daschy/angular-txt'); // Add wiki/troubleshooting section?
    }
  }

  angular.module('angular.txt', [])
    .config(function () {
      if (typeof Txt === 'undefined') {
        if (typeof require === 'function') {
          Txt = requireDep();
        } else {
          throw new Error('txt.js cannot be found by angular-txt! Please reference to: https://github.com/daschy/angular-txt'); // Add wiki/troubleshooting section?
        }
      }
    })
    .provider('dataTxt', function () {
      var that = this;
      that.$get = [
        function () {

        },
        ];
    })
    .directive('ngDataTxt', function ($timeout) {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          element.addClass('ng-cloak');
          var attribute = attr.$attr.ngDataTxt.split('ng-')[1];

          $timeout(function () {
              element.attr(attribute, attr.ngDataTxt);
            }, 0)
            .then(function () {
              element.removeClass('ng-cloak');
            });
        },
      };
    });
})();
