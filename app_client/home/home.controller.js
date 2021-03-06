(function () {

  angular
    .module('melbitApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'melbitData', 'geolocation'];
  function homeCtrl ($scope, melbitData, geolocation) {
    var vm = this;
    console.log(window.location);
    vm.pageHeader = {
      title: 'Melbit',
      strapline: 'Find places to spend Bitcoin near you!'
    };
    vm.sidebar = {
      content: "Looking for somewhere to grab a coffee and pay with Bitcoin? Look no further, you have found your one-stop directory."
    };
    vm.message = "Checking your location";

    vm.getData = function (position) {
      var lat = position.coords.latitude,
          lng = position.coords.longitude;
      vm.message = "Searching for nearby places";
      melbitData.locationByCoords(lat, lng)
        .success(function(data) {
          vm.message = data.length > 0 ? "" : "No locations found nearby";
          vm.data = { locations: data };
          console.log(vm.data);
        })
        .error(function (e) {
          vm.message = "Sorry, something's gone wrong, please try again later";
        });
    };

    vm.showError = function (error) {
      $scope.$apply(function() {
        vm.message = error.message;
      });
    };

    vm.noGeo = function () {
      $scope.$apply(function() {
        vm.message = "Geolocation is not supported by this browser.";
      });
    };

    geolocation.getPosition(vm.getData,vm.showError,vm.noGeo);

  }

}) ();
