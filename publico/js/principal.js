// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute', 'ngMaterial']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'static/templates/home.html',
			controller 	: 'mainController'
		})
		.when('/list', {
			templateUrl : 'static/templates/list.html',
			controller 	: 'listController'
		})
		.when('/form', {
			templateUrl : 'static/templates/form.html',
			controller 	: 'formController'
		})
		.when('/edit/:id_user', {
			templateUrl : 'static/templates/edit.html',
			controller 	: 'editController'
		})
		.when('/error', {
			templateUrl : 'static/templates/error.html',
		})
		.otherwise({
			redirectTo: '/error'
		});
});

angularRoutingApp.controller('mainController', function($scope) {
	$scope.menu = [{text:'Lista de Usuarios', link:'#/list'}, {text:'Crear Usuario', link:'#/form'}];
});

angularRoutingApp.controller('formController', function($scope) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});
