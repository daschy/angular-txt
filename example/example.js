angular
  .module('AngularTxtExample', ['angular.txt'])
  .config(function (dataTxtProvider) {
    function paramToJSON(paramString) {
      var output = {};
      try {
        var paramIn = paramString.replace('?', '').replace(new RegExp('=', 'g'), '":"');
        paramIn = paramIn.replace(new RegExp('&', 'g'), '","');
        output = JSON.parse('{"' + paramIn + '"}');
      } catch (ex) {
        console.log(ex);
      }

      return output;
    }

    var locale = paramToJSON(window.location.search).locale;

    dataTxtProvider.setOptions({
      id: '695c6c04-10d6-4c2e-b05d-72f5fcaaea6b',
      locale: locale,
      debug: true,
    });

  })
  .run(function ($location) {
    window.loc = $location;
  })
  .controller('ExampleCtrl', function ($scope, dataTxt) {
    // dataTxt.reload();
    $scope.locale = dataTxt.getOptions().locale;
    $scope.defaultLocale = dataTxt.getOptions().defaultLocale;
  });
