app.directive('demoDirective1', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      action: '&'
    },
    link: function ($scope) {
    }
  };
}).directive('demoDirective2', function () {
  return {
    restrict: 'AE',
    transclude: true,
    replace: true,
    scope: {
      action: '&'
    },
    link: function ($scope) {
    }
  };
}).directive('demoDirective3', function () {
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
}).directive('demoDirective4', ['$rootScope', function ($rootScope) {
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
}]).directive('demoDirective5', {
  restrict: 'A',
  transclude: false,
  replace: true,
  scope: {
    action: '&'
  },
  link: function ($scope) {
  }
}).directive('demoDirective6', ['$rootScope', function ($rootScope) {
  return function link($scope) {

  };
}]).directive('demoDirective7', ['$rootScope', function ($rootScope) {

}]);
