"use strict";

angular.
    module("search").
    directive("searchResult", function () {
    	return {
    		templateUrl: 'views/search/search-result.template.html',
    		controller: "SearchResultCtrl",
            controllerAs: "searchResultCtrl"
    	};
    });
