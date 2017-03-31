"use strict";

angular.module("core.place").
factory("Place", ["$http", function ($http) {
	return function (opts) {
        opts = opts || {};
        var url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1' +
            (_.isString(opts.locationName) ? '&place_name=' + opts.locationName : "") +
            (opts.curPos ? '&centre_point=' + [opts.curPos.lt, opts.curPos.ln].join(",") : "") +
            '&callback=JSON_CALLBACK';

        return $http.jsonp(url);
	}
}]);
