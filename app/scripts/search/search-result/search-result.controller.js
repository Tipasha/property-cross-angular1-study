"use strict";

angular.module("search").controller("SearchResultCtrl", ["$location", function($location) {
    this.onLocationClick = function(e) {
        $location.path("/places/" + e.place_name);
    };
}]);
