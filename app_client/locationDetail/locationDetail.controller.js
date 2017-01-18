(function () {

  angular
    .module('melbitApp')
    .controller('locationDetailCtrl', locationDetailCtrl);

  locationDetailCtrl.$inject = ['$routeParams'];
  function locationDetailCtrl ($routeParams) {
    var vm = this;
    vm.locationid = $routeParams.locationid;

    melbitData.locationById(vm.locationid)
      .success(function(data) {
        vm.data = { location: data };
        vm.pageHeader = {
          title: vm.data.location.name
        };
      })
      .error(function (e) {
        console.log(e);
      });
  }

}) ();
