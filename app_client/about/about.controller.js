(function () {

  angular
    .module('melbitApp')
    .controller('aboutCtrl', aboutCtrl)

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'About Melbit'
    };
    vm.main = {
      content: 'Melbit was created to help people find businesses in Melbourne that accept Bitcoin. The saints food bloggers, moomba the bulldogs the australian open carlton tullamarine, bill clinton ate two bowls hu tong dumplings the espy swanston footscray hobos, ticket inspector bespectacled girls north of the river MSAC secret laneway bars, formula one grand prix cold drip coffee old melbourne gaol. \n\nThe saints, laksa king spring racing carnival old melbourne gaol rooftop bars flemington racecourse, mamasita emerald peacock lions bar kath and kim ac/dc, south of the river tullamarine trams swanston secret laneway bars, hipsters neatly trimmed moustaches melb.'
    };
  }


}) ();
