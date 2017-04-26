var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		var testPage = {
			name: 'testPage',
			template: '<h1>test page</h1><a ui-sref=".testList">go to test list</a>'
		};

		var testList = {
			name: 'testList',
			parent: testPage,
			template: '<h3>test List</h3>'
		};

		$stateProvider
			.state('home', {
				url: '/home/:homeId',
				templateUrl: 'views/home.html',
				controller: function($stateParams){
					console.log($stateParams);
					//expect($stateParams).toBe({homeId: 5});//not working??
				}
			})
			.state('home.mrud', {
				//--/home/mrud
				url: '/mrud',
				templateUrl: 'views/home.mrud.html'
			})
			.state('home.teju', {
				url: '^/teju',
				params: {
					sweets: null,
					laddu: null
				},

				views:{
					'': {
						templateUrl: 'views/home.teju.html',
						controller: function($stateParams, $scope){
							console.log($stateParams);
							console.log($stateParams.sweets, $stateParams.laddu);
							//console.log($stateParams.sweets);
							$scope.sweets = $stateParams.sweets;
						}
					},
					'hobby@home.teju': {
						templateUrl: 'views/home.teju.hobby.html',
						controller: function($scope){
							$scope.hobbies = ['eating', 'sleeping', 'walking'];
							//$scope.hobby = "tejus hobbies";
						}
					},
					'friends@home.teju': {
						templateUrl: 'views/home.teju.friends.html'
					},
					/*'mad@home':{
						templateUrl: 'views/mad.html'
					},
					'mad@':{

					},
					'@home':{
						template: '<h1>Hello</h1>'
					},
					'@':{

					}*/

				}
				
			})
		
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html'
			})
			.state('contact', {
				url: '/contact',
				template: '<h3>Contact page</h3><a ui-sref=".manager">Contact manager</a>'
			})
			.state('manager', {
				parent: 'contact',
				template: '<h4>Contact Manager page view here</h4>'
			})

			.state(testPage)
			.state(testList);

			$urlRouterProvider.otherwise('/home');

			
	
}]);



