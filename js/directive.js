angular.module("app").directive("directive", function() {
	return {
		restrict: "E",
		templateUrl: "./views/directiveTemplate.html",
		scope: {
			recipes: "=",
		}
	};
});