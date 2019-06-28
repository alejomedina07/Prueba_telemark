
angularRoutingApp.controller('editController', function($scope, $http, $location, $routeParams) {

	$scope._id = $routeParams.id_user;
	function getUser() {
		$http.get('/edit-user/' + $scope._id)
    .then(function(respuesta) {
			$scope.form = respuesta.data;
      // $location.path('/list');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

	getUser();
  $scope.guardar = function () {
    $http.post('/edit-user/'+ $scope._id, $scope.form)
    .then(function(respuesta) {
      $location.path('/list');
    })
    .catch(function (error) {
      console.log(error);
    });
  };

});
