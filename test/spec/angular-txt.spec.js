'use strict';

describe('angularTxt', function () {

  var $compile;
  var $scope;
  var $httpBackend;
  var txtConfig = {
    locale: 'en-EN',

  }

  beforeEach(module('angular.txt'));

  beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_, dataTxt) {
    $compile = _$compile_;
    $scope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/').respond(200, {
      test: true
    });
  }));

  afterEach(inject(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();

  }));

  it('dataTxt provider', inject(function () {
    expect(true).is.false;
  }));

  it.only('ng-data-txt directive', inject(function (dataTxt) {
    // expect(dataTxt).not.toBeUndefined();
    var element = angular.element('<div ng-data-txt="key"></div>');
    element = $compile(element)($scope);
    $scope.$digest();
  }));

});
