angular.module("app").service("mainSrvc", function($http) {
	var baseUrl = "http://food2fork.com/api/";
	var apiKey = "4cc8742059649d4518b7105ffb4dc984";

	this.getRecipes = function(){
		return $http
		.get(baseUrl + "search?key=" + apiKey + "&q=chicken")
		.then(function(response) {
			return response.data.recipes;
		});
	};
});