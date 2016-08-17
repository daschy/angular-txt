angular
  .module('AngularTxtExample', ['angular.txt'])
  .config(function (dataTxtProvider) {

  })
  .controller('ExampleCtrl', function ($scope) {
    console.log('ExampleCtrl loaded');
  });
