var app = angular.module('friendsList'); //get module
app.controller('mainCtrl', function($scope) {
  $scope.name = "Kellie Green";
  $scope.friends = ['Bill', 'Joe', 'Mindy', 'Sierra'];
})
