"use strict";

angular.module("search").
controller("SearchCtrl", ["$scope", "Place", function ($scope, Place) {
	var self = this;
	var searchTimeout = null;

	self.makeSearch = (opts) => {
		if (searchTimeout) clearTimeout(searchTimeout);

		searchTimeout = setTimeout(function() {
			Place(opts).then((res) => {
				self.locations = objectPath.get(res, "data.response.locations", []);
			}, (err) => {
				console.log(err)
			});
		}, 300);
	}

	self.forceSearch = function() {
		if (typeof self.searchProp === "undefined") return;
		self.makeSearch({
			locationName: self.searchProp || ""
		});
	}

	self.makeSearchByCurrentPosition = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((pos) => {
				var lt = pos.coords.latitude;
				var ln = pos.coords.longitude;
				self.makeSearch(lt && ln ? {
					locationName: null,
					curPos: {
						lt: lt,
						ln: ln
					}
				} : null);
			});
		}
	}

	$scope.$watch(() => {
		return self.searchProp;
	}, function(prop) {
		if (typeof prop === "undefined") return;

		self.makeSearch({
			locationName: prop
		});
	});
}]);
