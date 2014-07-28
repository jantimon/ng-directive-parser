define(
  [
    'app'
  ],
  function (app) {
    'use strict';
    app.directive('demoDirective1', function () {
      return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
          action: '&'
        },
        template: '<demo-directive2 data-action="foo">Conten</demo-directive2>',
        link: function ($scope) {
        }
      };
    });
    app.directive('demoDirective2', function () {
      return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: 'template.html',
        scope: {
          action: '&'
        },
        link: function ($scope) {
        }
      };
    });
    app.directive('demoDirective3', function () {
      return {
        restrict: 'A',
        transclude: false,
        replace: false,
        scope: {
          action: '&'
        },
        link: function ($scope) {
        }
      };
    });
    app.directive('demoDirective4', ['$rootScope', function ($rootScope) {
      return {
        restrict: 'C',
        transclude: false,
        replace: false,
        scope: {
          action: '&'
        },
        link: function ($scope) {
        }
      };
    }]);
    app.directive('demoDirective5', {
      restrict: 'ACE',
      transclude: false,
      replace: true,
      scope: {
        action: '&'
      },
      link: function ($scope) {
      }
    });
    app.directive('demoDirective6', ['$rootScope', function ($rootScope) {
      return function link($scope) {

      };
    }]);
    app.directive('demoDirective7', ['$rootScope', function ($rootScope) {

    }]);
  }
);