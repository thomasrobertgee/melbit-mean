(function () {

  angular
    .module('melbitApp')
    .controller('locationDetailCtrl', locationDetailCtrl);

  locationDetailCtrl.$inject = ['$routeParams', '$location', '$modal', 'melbitData', 'authentication'];
  function locationDetailCtrl ($routeParams, $location, $modal, melbitData, authentication) {
    var vm = this;
    vm.locationid = $routeParams.locationid;
    console.log('location id', vm.locationid);

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentPath = $location.path();

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

    vm.popupReviewForm = function () {
      var modalInstance = $modal.open({
        templateUrl: '/reviewModal/reviewModal.view.html',
        controller: 'reviewModalCtrl as vm',
        resolve : {
          locationData : function () {
            return {
              locationid : vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });

      modalInstance.result.then(function (data) {
        vm.data.location.reviews.push(data);
      });
    };

  }

})();
