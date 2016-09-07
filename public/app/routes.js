var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider.when('/User',{
		controller: 'UserController',
		templateUrl: '/views/user.html'
	})
       .otherwise({
		redirectTo: '/'
	});
});