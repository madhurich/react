var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
	
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('home.myHome', {
				url: '/myHome',
				templateUrl: 'views/home.myHome.html',
				params: {
					name: null,
					location: null
				},
				controller: function($scope, $stateParams){
					$scope.name = $stateParams.name;
					$scope.location = $stateParams.location;
				}
			})

			.state('about', {
				url: '/about',
				views:{
					'': {
						templateUrl: 'views/about.html'
					},
					'aboutMe@about': {
						template: '<h3>About me here</h3>'
					},
					'aboutFriend@about': {
						template: '<h3>About friend</h3>'
					}
				}
				
			});

		$urlRouterProvider.otherwise('/home');	
}]);