var myApp1=angular.module('myApp1',['ngRoute','ngResource']).
     config(function ($routeProvider) {
		$routeProvider.
			when('/',{controller:'App1Cntl',templateUrl:'/templates/app1.html'}).
			otherwise({redirectTo:'/'});
	});

var myApp2=angular.module('myApp2',['ngRoute']).
	config(function ($routeProvider) {
		$routeProvider.
			when('/',{controller:'App2Cntl',templateUrl:'/templates/app2.html'}).
			otherwise({redirectTo:'/'});
	});
	angular.bootstrap(document.getElementById("hp2"),['myApp2']);