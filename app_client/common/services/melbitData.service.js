(function () {

  angular
    .module('melbitApp')
    .service('melbitData', melbitData);

  melbitData.$inject = ['$http'];
  function melbitData ($http) {
    var locationByCoords = function (lat, lng) {
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
    };

    var locationById = function (locationid) {
      return $http.get('/api/locations/' + locationdid);
    };

    return {
      locationByCoords : locationByCoords,
      locationById : locationById
    };
  }

}) ();
