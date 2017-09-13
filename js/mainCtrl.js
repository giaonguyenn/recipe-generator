angular.module("app").controller("mainCtrl", function($scope, mainSrvc) {
	$scope.getRecipes = function(searchTerm1,searchTerm2,searchTerm3) {
		if (searchTerm1) {
			mainSrvc.getRecipes(searchTerm1,searchTerm2,searchTerm3).then(function(response) {
				$scope.recipes = response;
				$scope.first = $scope.searchTerm1;
				$scope.second = $scope.searchTerm2;
				$scope.third = $scope.searchTerm3;
				$scope.searchTerm1 = "";
				$scope.searchTerm2 = "";
				$scope.searchTerm3 = "";
				$scope.show = true;
			});	
		} else {
			alert('Ingredient 1 is missing!');
		}
		
	}
});




