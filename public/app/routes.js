myApp.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'content/views/home.html',
		controller: 'homeController'
	}).when('/User',{
		controller: 'UserController',
		templateUrl: 'content/views/user.html'
	}).when('/login', {
		templateUrl: 'content/views/login.html',
		controller: 'LoginController'
	}).when('/logout', {
		templateUrl: 'content/views/logout.html',
		controller: 'LoginController'
	}).when('/register', {
		templateUrl: 'content/views/register.html',
		controller: 'formController'
    }).when('/about', {
		templateUrl: 'content/views/about.html',
		controller: 'aboutController'
    }).when('/search', {
		templateUrl: 'content/views/search.html',
		controller: 'searchController'
    }).when('/faq', {
		templateUrl: 'content/views/faq.html',
		controller: 'faqController'
    }).when('/contact', {
		templateUrl: 'content/views/contact.html',
		controller: 'contactController'
    }).otherwise({
		redirectTo: '/'
	});
});