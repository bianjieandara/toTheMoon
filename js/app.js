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

};

function controller1() {
	var ctrl1=this;
	ctrl1.name='To the moon'
};

})();