(function(){
'use strict'

angular.module("myapp", ['ui.router'])
.config(RoutesConfig)
.controller('controller1', controller1)

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']

function RoutesConfig($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise("/home");

$stateProvider.state('home',{
	url: "/home",
	templateUrl: "./templates/home.html"
})
.state('history',{
	url: "/history",
	templateUrl: "./templates/history.html"
})
.state('gallery',{
	url: "/gallery",
	templateUrl: "./templates/gallery.html"
})
.state('game-play',{
	url: "/game-play",
	templateUrl: "./templates/game-play.html"
})
.state('downloads',{
	url: "/downloads",
	templateUrl: "./templates/downloads.html"
})
};

function controller1() {
	var ctrl1=this;
	ctrl1.name='To the moon'
};

})();