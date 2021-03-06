angular.module("app").service("mainSrvc", function($http) {
	var baseUrl = "http://food2fork.com/api/";
	var apiKey = "4cc8742059649d4518b7105ffb4dc984";

	this.getRecipes = function(searchTerm1,searchTerm2,searchTerm3) {
		return $http
		.get(baseUrl + "search?key=" + apiKey + "&q=" + searchTerm1 + "," + searchTerm2 + "," + searchTerm3)
		.then(function(response) {
			return response.data.recipes;
		});
	};

	// this.getId = function() {
	// 	return 
	// }

	// this.getIngredients = function(itemId) {
	// 	return $http.get(baseUrl + "get?key=" + apiKey + "rId=" + itemId).then(function(response) {
	// 		return response.data.ingredients;
	// 	}
	// };
});