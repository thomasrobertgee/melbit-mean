angular
  .module('melbitApp')
  .controller('homeCtrl', homeCtrl);

function homeCtrl ($scope) {
  $scope.pageHeader = {
    title: 'Melbit',
    strapline: 'Find places to spend Bitcoin near you!'
  };
  $scope.sidebar = {
    content: "looking for wifi and a seat and some coffee"
  };
}
