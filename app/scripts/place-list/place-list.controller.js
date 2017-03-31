"use strict";

angular.module("placeList").
    controller("PlaceListCtrl", ["Place", "$routeParams", function(Place, $routeParams) {
        var self = this;

        Place({
            locationName: $routeParams.location
        }).then(function(res) {
            self.places = objectPath.get(res, "data.response.listings", []);
        }, function(err) {
            console.log(err)
        });
    }]);
