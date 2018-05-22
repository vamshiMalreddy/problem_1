/*use strict*/
var app = angular.module("app",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	  .when('/animals',{
			templateUrl: 'navbar.html'
		})
		.when('/:animalId',{
			templateUrl: 'animal.html'
		})
		.otherwise({
			redirectTo: '/animals'
		});
}]);



app.controller('ctrl',function($scope,$http){
	$http.get('info.json').then(function(data){
		$scope.animals = data.data;
	});
});
