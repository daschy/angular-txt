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
      that.defaultOptions = {
        locale: 'en-EN',
        highlightDebugClassName: 'data-txt-hightlight',
      };
      that.options = {};
      that.translations = {};
      that.promiseList = null;
      that.isFetchingTranslations = false;
      that.$get = [
        '$q', '$http',
        function ($q, $http) {
          fetchTranslations(that.options)
            .then(function (translations) {
              that.translations = translations;
            });

          function fetchTranslations(options) {
            if (that.translations[options.locale]) {
              return $q.when(that.translation[options.locale]);
            } else if (that.promiseList) {
              return $q.when(that.promiseList);
            }

            that.promiseList = $http({
                url: 'https://data.teletext.io/accounts/' + options.id + '/' + options.locale + '.json?t=' + Date.now(),
                method: 'GET',
              })
              .then(function (resp) {
                var promises = [];
                angular.forEach(resp.data.files, function (file) {
                  promises.push($http({
                    url: file.url,
                    method: 'GET',
                  }));
                });

                return $q.all(promises);
              })
              .then(function (respList) {
                var translations = {};
                angular.forEach(respList, function (item) {
                  translations[item.data.resourceId] = item.data;
                });

                that.promiseList = null;
                return translations;
              });

            return that.promiseList;
          }

          function options(newOptions) {
            that.options = angular.extend({}, that.defaultOptions, that.options, newOptions);
            return that.options;
          }

          function changeLocale(newLocale) {
            options({ locale: newLocale });
            return fetchTranslations(options())
              .then(function (translations) {
                that.translations = translations;
                return translations;
              });
          }

          function translations() {
            return fetchTranslations(that.options);
          }

          return {
            changeLocale: changeLocale,
            options: options,
            translations: translations,
          };
        },
      ];
    })
    .directive('ngDataTxt', function ($rootScope, $document, dataTxt) {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          element.addClass('ng-cloak');
          if (dataTxt.options().debug) {
            element.addClass(dataTxt.options().highlightDebugClassName);
          }

          dataTxt.translations()
            .then(function (translations) {
              var locale = dataTxt.options().locale;
              var resourceFile = (attr.ngDataTxt || '').split('.')[0];
              var resourceEntry = (attr.ngDataTxt || '').split('.')[1];
              var resourceId = dataTxt.options().locale + '/' + resourceFile;
              var resourceValue = null;
              dataTxt.translations()
                .then(function (translations) {
                  if (resourceEntry in translations[resourceId].i18n) {
                    resourceValue = translations[resourceId].i18n[resourceEntry];
                    element.text('').append(resourceValue);
                  }
                  element.removeClass('ng-cloak');
                });
            });
        },
      };
    });
})();
