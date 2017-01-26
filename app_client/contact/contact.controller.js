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
      content: 'Contact form coming soon! In the meantime, send me an email at the below address.'
    };
  }


}) ();
