var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	}).when('/User',{
		controller: 'UserController',
		templateUrl: '/views/user.html'
	}).when('/Login', {
		templateUrl: '/views/login.html',
		controller: 'LoginController'
	}).when('/Sign Up', {
		templateUrl: '/views/form.html',
		controller: 'formController'
    }) .otherwise({
		redirectTo: '/'
	});
});