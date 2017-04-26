var app = angular.module('myApp', ['ui.router', 'ui.router.stateHelper']);

app.config(function(stateHelperProvider){
	stateHelperProvider.state({
		name: 'root',
		templateUrl: 'views/root.html',
		children: [{
			name: 'home',
			templateUrl: 'views/sub-views/home.html',
			children: [{
				name: 'myHome',
				templateUrl: 'views/sub-views/home.myHome.html'
			}, {
				name: 'myFriend',
				templateUrl: 'views/sub-views/home.myFriend.html'
			}]
		}, {
			name: 'about',
			templateUrl: 'views/sub-views/about.html',
			children: [{
				name: 'hero',
				templateUrl: 'views/sub-views/about.hero.html'
			}]
		}]
	}, {keepOriginalNames: true});
});

