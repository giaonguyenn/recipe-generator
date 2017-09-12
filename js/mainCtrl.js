angular.module("app").controller("mainCtrl", function($scope, mainSrvc) {
	$scope.getRecipes = function() {
		mainSrvc.getRecipes().then(function(response) {
			$scope.recipes = response;
		});	
	}
	$scope.getRecipes();
});




