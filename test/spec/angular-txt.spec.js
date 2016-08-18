'use strict';

describe('angularTxt', function () {

  var $compile;
  var $scope;

  beforeEach(module('angular.txt'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_;
  }));

  it('dataTxt provider', inject(function () {
    expect(true).is.false;
  }));

  it.only('ng-data-txt directive', inject(function () {
    var element = angular.element('<div ng-data-txt="key"></div>');
    element = $compile(element)($scope);
    $scope.$digest();
  }));

});
