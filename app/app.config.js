'use strict';

angular.
  module('app').
  config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.
        when('/main', {
          template: '<main-win></main-win>'
        }).
        when('/places/:location', {
          template: '<place-list></place-list>'
        }).
        otherwise('/main');
    }
  ]);
