(function () {

  angular
    .module('melbitApp')
    .service('melbitData', melbitData);

  melbitData.$inject = ['$http', 'authentication'];
  function melbitData ($http, authentication) {
    var locationByCoords = function (lat, lng) {
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
    };

    var locationById = function (locationid) {
      return $http.get('/api/locations/' + locationid);
    };

    var addReviewById = function (locationid, data, {
      headers: {
        Authorization: 'Bearer "+ authentication.getToken()"'
      }
    });
  }; 

    return {
      locationByCoords : locationByCoords,
      locationById : locationById,
      addReviewById : addReviewById
    };
  }

}) ();
