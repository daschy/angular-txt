'use strict';

describe('angularTxt', function () {

  var $compile;
  var $scope;
  var $httpBackend;
  var $timeout;
  var dataTxt;

  beforeEach(module('angular.txt'));

  beforeEach(module(function (dataTxtProvider) {
    dataTxtProvider.setOptions({
      id: '695c6c04-10d6-4c2e-b05d-72f5fcaaea6b',
      locale: 'en-EN',
      debug: true,
    });
  }));

  beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_, _$timeout_, _dataTxt_) {
    $compile = _$compile_;
    $scope = _$rootScope_;
    $timeout = _$timeout_;
    dataTxt = _dataTxt_;
  }));

  afterEach(inject(function () {}));

  it('ng-data-txt directive', inject(function () {
    // console.log('Tests here. Txt.js does not load properly from test/txt.config.js');
    var element = angular.element('<div ng-data-txt="examples.title">Text to be replaced</div>');
    element = $compile(element)($scope);
    $scope.$digest();
    $timeout.flush(100, { noThrow: false });
    $timeout.verifyNoPendingTasks();

    expect(element.attr('data-txt')).equal('examples.title');
    expect(element.css('border')).to.be.not.null;
  }));
});
