(function () {

  angular
    .module('melbitApp')
    .service('melbitData', melbitData);
  function melbitData ($http) {
    var locationByCoords = function (lat, lng) {
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
    };
    return {
      locationByCoords : locationByCoords
    };
  }

}) ();
