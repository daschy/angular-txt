/**
 * @ngdoc module
 * @name angular.txt
 * @description
 * angular directive for teletext.io
 */

(function () {
  'use strict';

  angular.module('angular.txt', ['angularLoad'])
    .config(function () {

    })
    .provider('dataTxt', function dataTxtProvider() {
      var that = this;
      var defaultOptions = {
        id: null,
        defaultLocale: 'en-EN',
        locale: null,
        defaultFile: null,
        editButtonPostion: null,
        editOnlyMode: null,

        scriptUrl: 'https://teletext.io/js/1.5.2/txt-min.js',
        debug: false,
        load: true,
      };

      var options = {};
      that.setOptions = function (newOptions) {
        angular.extend(options, defaultOptions, newOptions);
      };

      that.getOptions = function () {
        return options;
      };

      that.$get = ['angularLoad',
        function (angularLoad) {
          if (getOptions().load) {
            load(options);
          }

          function load() {
            return angularLoad.loadScript(getOptions().scriptUrl)
              .then(function () {
                return Txt.render(options);
              })
              .catch(function (err) {
                throw err;
              });
          }

          function getOptions() {
            return that.getOptions();
          }

          return {
            reload: load,
            getOptions: getOptions,
          };
        },
      ];
    })
    .directive('ngDataTxt', function ($log, $timeout, dataTxt) {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          element.addClass('ng-cloak');
          if (dataTxt.getOptions().debug) {
            element.css('border', '1px solid red');
            $log.debug(attr.ngDataTxt);
          }

          var attribute = attr.$attr.ngDataTxt.split('ng-')[1];

          $timeout(function () {
              element.attr(attribute, attr.ngDataTxt);
            }, 0)
            .then(function () {
              $timeout(function () {
                element.removeClass('ng-cloak');
              }, 80);
            });
        },
      };
    });
})();
