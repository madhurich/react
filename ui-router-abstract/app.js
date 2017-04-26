var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				abstract: true,
				template: '<h1>Home view</h1><div ui-view></div>',
				controller: function($scope){
					$scope.sharedData = "this is shared data";
				}
			})
			.state('home.myHome', {
				url: '/myHome',
				template: '<h3>myHome</h3>',
				controller: function($scope){
					$scope.homeData = $scope.sharedData;
					console.log($scope.homeData);
				}
			});
}]);