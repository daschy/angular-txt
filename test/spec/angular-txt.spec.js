'use strict';

describe('angularTxt', function () {

  var $compile;
  var $scope;
  var $httpBackend;
  var $timeout;
  var txtConfig = {
    locale: 'en-EN',

  }

  beforeEach(module('angular.txt'));

  beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_, _$timeout_, dataTxt) {
    $compile = _$compile_;
    $scope = _$rootScope_;
    $timeout = _$timeout_;
  }));

  afterEach(inject(function () {
  }));

 

  it.only('ng-data-txt directive', inject(function (dataTxt) {
    console.log('Tests here. Txt.js does not load properly from test/txt.config.js');
    var element = angular.element('<div ng-data-txt="examples.simple_title">Text to be replaced</div>');
    element = $compile(element)($scope);
    // $scope.$digest();
    $timeout.flush();
    $timeout.verifyNoPendingTasks();

    console.log(element);
    expect(element.text()).equal('Placeholder 1');
  }));

});
