(function () {

  angular
    .module('melbitApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'melbitData', 'geolocation'];
  function homeCtrl ($scope, melbitData, geolocation) {
    var vm = this;
    vm.pageHeader = {
      title: 'Melbit',
      strapline: 'Find places to spend Bitcoin near you!'
    };
    vm.sidebar = {
      content: "looking for wifi and a seat and some coffee"
    };
    vm.message = "Checking your location";
    vm.getData = function (position) {
      var lat = position.coords.latitude,
          lng = position.coords.longitude;
      vm.message = "Searching for nearby places";
      melbitData.locationByCoords(lat, lng)
        .success(function(data) {
          vm.message = data.length > 0 ? "" : "No location found nearby";
          vm.data = { locations: data };
        })
        .error(function (e) {
          vm.messahe = "Sorry, something's gone wrong";
        });
    };
    vm.showError = function (error) {
      $scope.$apply(function() {
        vm.mesage = error.message;
      });
    };
    vm.noGeo = function () {
      $scope.$apply(function() {
        v,.message = "Geolocation is not supported by this browser.";
      });
    };
    geolocation.getPosition(vm.getData,vm.showError,vm.noGeo);
  }

}) ();
