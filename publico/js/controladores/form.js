
angularRoutingApp.controller('formController', function($scope, $http, $location) {
	$scope.form = {};
  $scope.guardar = function () {
    $http.post('/users', $scope.form)
    .then(function(respuesta) {
      $location.path('/list');
    })
    .catch(function (error) {
      console.log(error);
    });
  };

});
