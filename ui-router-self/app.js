var app = angular.module('myApp', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/home/:place/:color',
				templateUrl: 'views/home.html',
				controller: function($scope, $stateParams){
					$scope.title = 'Home';
					$scope.place = $stateParams.place;
					$scope.color = $stateParams.color;
				}
			})
			.state('about', {
				url: '/about/:aboutSub',
				templateUrl: 'views/about.html',
				controller: function($scope, $stateParams, $state){
					$scope.title = 'About';
					console.log($state);
					console.log($stateParams.aboutSub);
				}
			})
			.state('about.myPage', {
				url:'/myPage',
				templateUrl: 'views/about.myPage.html',
				/*controller: function($state){
					$state.go('about.myFriend', {number: 9, subject: 'UI Routing'});	
				}*/
				
			})
			.state('about.myFriend', {
				url: '/myFriend/:number/:subject',
				templateUrl: 'views/about.myFriend.html',
				controller: function($scope, $stateParams, $state){
					console.log($state);
					console.log($stateParams.aboutSub);
					$scope.number = $stateParams.number;
					$scope.subject = $stateParams.subject;
				}
			})

			.state('contact', {
				url: '/contact',
				params: {
					ph: null,
					area: null
				},
				templateUrl: 'views/contact.html',
				controller: function($scope, $stateParams){
					$scope.title = 'Contact';
					console.log($stateParams);
				}
			})
			.state('contact.manager', {
				url:'/manager',
				views: {
					'': {
						templateUrl: 'views/contact.manager.html',
					},
					'assisManager@contact.manager': {
						template: '<h4>Contact Assistant Manager</h4>'
					},
					'genManager@contact.manager': {
						template: '<h4>Contact General Manager</h4>'
					}
				}
				
			});
	
		$urlRouterProvider.otherwise('/home');
}]);