angularRoutingApp.controller('listController', function($scope, $http, $mdDialog) {


  function getUsers() {
    $http.get('/users')
    .then(function(respuesta) {
      $scope.users = respuesta.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getUsers();

  $scope.reverseOrder = false;
  $scope.sortField = 'nombres';

  $scope.delete = function(ev, id) {
    var confirm = $mdDialog.confirm()
         .title('Eliminar registro')
         .textContent('¿Está seguro que desea eliminar este registro?')
         .ariaLabel('Lucky day')
         .targetEvent(ev)
         .ok('Eliminar!')
         .cancel('Cancelar');
    $mdDialog.show(confirm)
    .then(function() {
      $scope.status = 'You decided to get rid of your debt.';

      return $http.get('/delete/' + id);
    })
    .then(function(respuesta) {
      getUsers();
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  $scope.sortBy = function(sortField) {
    $scope.reverseOrder = ($scope.sortField === sortField) ? !$scope.reverseOrder : false;
    $scope.sortField = sortField;
  };
});
