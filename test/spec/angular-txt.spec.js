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
    expect(true).to.be(false);
  }));

  it('ng-data-txt directive', inject(function () {
    // expect(info.getUserInfo()).to.be.not.null;
  }));

});
