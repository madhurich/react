var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		//home views
		.state('home', {
			url: '/home',
			templateUrl: 'partials/partial-home.html'
		})
		.state('home.list', {
			url:'/list',
			templateUrl: 'partials/partial-home-list.html',
			controller: function($scope){
				$scope.people = ['mad', 'man', 'dad'];
			}
		})
		.state('home.paragraph', {
			url:'/paragraph',
			templateUrl: 'partials/partial-home-para.html'
		})

		//about views
		.state('about', {
			url: '/about/:harry/:wand',
			controller: function($stateParams){
				console.log($stateParams);
			},
			templateUrl: 'partials/partial-about.html'
		})
		.state('about.aboutMe', {
			url: '/aboutMe/:lappy/:mouse',
			controller: function($stateParams){
				console.log($stateParams.harry);
				console.log($stateParams.lappy);
			},
			templateUrl: 'partials/partial-about-aboutMe.html'
		})
		.state('about.dad', {
			url: '/dad',
			
			views:{
				//relatively targets the un-named view in the state's parent
				//which is 'about' state, inside of partial-about.html
				'': {
					templateUrl: 'partials/partial-about-dad.html'
				},
				//absolutely targets the view called 'hi' in partial-about.html
				'hi@about': {
					template: '<h3>Hi view in about</h3>'
				},
				'how@about.dad':{
					template: '<h3>How view in about.dad</h3>'
				},
			/*	//due to this the above views wil not be displayed
				'@':{
					template: '<h3>@ pointing to index</h3>'
				},
				//due to this the above views wil not be displayed
				'are@':{
					template: '<h3>are view</h3>'
				},*/
				'@about.dad':{
					template: '<h3>un-named view in about.dad</h3>'
				},
				'test':{
					template: '<h3>test view</h3>'
				}
			}
		})

		//news views
		.state('news', {
			url: '/news',
			views: {

				'': {templateUrl: 'partials/partial-news.html',
					controller: 'newsController'
					},
					'columnOne@news': {template: '<p>This should be column one</p>\
					<div ng-repeat="x in people">\
					<p><strong>Name: </strong>{{x.name}}</p>\
					<p><strong>Age: </strong>{{x.age}}</p>\
					</div>'},
				'columnTwo@news': {
					templateUrl: 'partials/news-data.html'
					
				},
				//targets the empty view in index.html
				/*'@': {
					template: '<h3>"@" view targeting index.html</h3>'
				},*/
				//targets the view named 'hello' inside index.html because 
				//state is not mentioned
				'hello@': {
					template: '<h3>hello view</h3>'
				}
				

			}
			
		})

		.state('books', {
			url: '/books',
			templateUrl: 'partials/partial-book.html',
			controller: 'booksCtrl'
		})
		.state('bookDetail', {
			url: '/books/:bookId/:bookAuthor',
			controller: 'bookDetailsCtrl',
			template: '<p>ID of the book is : {{id}} and the author is {{author}}</p>'
		})
		.state('other', {
			url:'/other/{obj1}/{obj2}',
			controller: function($stateParams, $scope){
				console.log($stateParams);
				$scope.obj1val = $stateParams.obj1;
				$scope.obj2val = $stateParams.obj2;
			},

			template: '<p>obj1.value:{{obj1val}}, obj2.value:{{obj2val}}</p>'
		});

}]);

routerApp.controller('newsController', ['$scope', function($scope){
	
	$scope.people = [{
		name: 'me itself',
		age: '22'
	}, {
		name: 'sis',
		age: '24'
	}, {
		name: 'dad',
		age: 'number less'
	}];
}]);

routerApp.controller('booksCtrl', ['$scope', function($scope){
	$scope.books = [{
		id: 1,
		author: 'mad'
	}, {
		id: 2,
		author: 'man'
	}, {
		id: 3,
		author: 'dad'
	}];
	
}]);

routerApp.controller('bookDetailsCtrl', ['$scope', '$stateParams', '$state',
 function($scope, $stateParams, $state){
	$scope.id = $stateParams.bookId;

	$scope.author = $stateParams.bookAuthor;
	//$state.go('bookDetail',{ bookId: $stateParams.bookId, bookAuthor:  $stateParams.bookAuthor });
}]);
