/* GET home page. */
module.exports.about = function(req, res) {
  res.render('generic-text', {
    title: 'About Melbit',
    content: 'Melbit was created to help people find businesses in Melbourne that accept Bitcoin. <br/><br/> The saints food bloggers, moomba the bulldogs the australian open carlton tullamarine, bill clinton ate two bowls hu tong dumplings the espy swanston footscray hobos, ticket inspector bespectacled girls north of the river MSAC secret laneway bars, formula one grand prix cold drip coffee old melbourne gaol.'
  });
};

module.exports.angularApp = function(req, res){
  res.render('layout', { title: 'Melbit' });
};
