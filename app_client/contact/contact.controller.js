(function () {

  angular
    .module('melbitApp')
    .controller('contactCtrl', contactCtrl);

  function contactCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'Contact Us'
    };
    vm.main = {
      content: 'coming soon!'
    };
  }


}) ();
