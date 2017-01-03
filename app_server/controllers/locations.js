/* GET 'home' page */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'Melbit | Melbourne Bitcoin Directory', pageHeader: {
      title: 'Melbit',
      strapline: 'Find businesses that accept Bitcoin near you!'
    },
    sidebar: "Looking for somewhere to buy coffee with Bitcoin? Look no further, Melbit has you covered.",
    locations: [{
      name: 'Higher Ground',
      address: '123 Little Bourke Street, Melbourne 3000',
      rating: 5,
      facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
      distance: '100m'
    },{
      name: 'Burger King',
      address: '123 Fake Street, Cherry Town 7648',
      rating: 2,
      facilities: ['Hot Drinks', 'Beer', 'Premium Wifi'],
      distance: '2768km'
    },{
      name: 'Little Pixies',
      address: 'Brown Alley 564, Melbourne 3001',
      rating: 4,
      facilities: ['Pizza', 'No Mas', 'Premium Wifi'],
      distance: '950m'
    }]
  });
};

/* GET 'info' page */
module.exports.locationInfo = function(req, res){
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};
