(function () {

  angular
    .module('melbitApp')
    .controller('ratingStars', ratingStars);
  function ratingStars () {
    return {
      restrict: 'EA',
      scope: {
        thisRating : '=rating'
      },
      templateUrl: '/common/directives/ratingStars/ratingStars.template.html'
    };
  }

}) ();
