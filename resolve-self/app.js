var app = angular.module('myApp', ['ui.router', 'ui.router.stateHelper']);

	app.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('home', {
				url: '/home',
				resolve: {
					homeFunc: function(){
						return {name: 'home name'};
					}
				},
				views: {
					'': {
						templateUrl: 'views/home.html',
						resolve: {
							test: function(){
								return {name: 'test'};
							}
						}//this resolve will just be available for this particular view ''
						//and is not available for its nested view, because it is defined w.r.t '' view
						//to be available for its nested views the resolve muste be defined w.r.t state 'home'
						//i.e where the state is defined see line 9
					},
					'myHome@home': {
						template: '<h3>My home</h3>',
						controller: function(homeFunc, myHomeFunc){
							console.log(homeFunc, myHomeFunc);
							//console.log(test);//this will not be available here
						},
						resolve: {
							myHomeFunc: function(){
								return {name: 'myHome func'};
							}
						}
					},
					'myFriend@home': {
						template: '<h3>My friend</h3>',
						resolve: {
							myFriendFunc: function(){
								return {name: 'myfriendfunc'};
							}
						}
					}
				}
				
			
			});
	}]);



