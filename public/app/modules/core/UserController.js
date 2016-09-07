var myApp = angular.module('myApp');

myApp.controller('UserController', ['$scope','$http',function($scope, $http,$location,$routeParams){

console.log('User Controller initialized...');

// check get PRofile
$scope.getUser = function(){
$http.get('/api/user').success(function(response){
	$scope.user = response;
});
}


  

$scope.getUser = function(){

	var id = $routeParams.id;
	$http.get('/api/user/').success(function(response){
		$scope.user = response;
});
}

$scope.addUser = function(){
	$http.post('/api/user/',$scope.user).success(function(response){
			window.location.href='#/user';
			console.log('user added');
});

}

}]);

angular.module('toolbarDemo1', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
});