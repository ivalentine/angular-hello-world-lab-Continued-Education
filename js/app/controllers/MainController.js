function MainController($scope) {
  $scope.name="Ian",
  $scope.city="Brooklyn"
}

angular
  .module('app')
  .controller('MainController', MainController);
