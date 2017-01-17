(function () {

  angular
    .module('melbitApp')
    .service('geolocation', geolocation);
  function geolocation () {
    var getPosition = function (cbSuccess, cbError, cbNoGeo) {
      if (navigator.geoloction) {
        navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
      }
      else {
        cbNoGeo();
      }
    };
    return {
      getPosition : getPosition
    };
  }

}) ();
