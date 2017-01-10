/* GET 'home' page */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'Melbit | Melbourne Bitcoin Directory', pageHeader: {
      title: 'm e l b i t',
      strapline: 'Find businesses that accept Bitcoin near you!'
    },
    sidebar: "Looking for somewhere to buy coffee with Bitcoin? Look no further, Melbit has you covered.",
    locations: [{
      name: 'Higher Ground',
      address: '650 Little Bourke Street, Melbourne 3000',
      rating: 5,
      facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
      distance: '100m'
    },{
      name: 'Tramp Bar',
      address: '20 King St, Melbourne 3000',
      rating: 2,
      facilities: ['Hot Drinks', 'Beer', 'Premium Wifi'],
      distance: '2768km'
    },{
      name: 'The Elephant & The Wheelbarrow',
      address: '94-96 Bourke St, Melbourne 3000',
      rating: 4,
      facilities: ['Pizza', 'No Mas', 'Premium Gifi'],
      distance: '9500m'
    }]
  });
};

/* GET 'info' page */
module.exports.locationInfo = function(req, res){
  res.render('location-info', {
    title: 'Higher Ground',
    pageHeader: {title: 'Higher Ground'},
    sidebar: {
      context: 'is somewhere to buy coffee with      Bitcoin.',
      callToAction: 'If you\'ve been and you like it, or if you don\'t, please leave a review regardless.'
    },
    location: {
      name: 'Higher Ground',
      address: '123 Little Bourke Street, Melbourne 3000',
      rating: 5,
      facilities: ['Hot Drinks', 'Beer', 'Premium Wifi'],
      coords: {lat: -37.815584, lng: 144.953074},
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7.00am',
        closing: '7.00pm',
        closed: false
      },{
        days: 'Saturday',
        opening: '8.00am',
        closing: '6.00pm',
        closed: false
      },{
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Tommy Gee',
        rating: 5,
        timestamp: '16 February 2014',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      },{
        author: 'Baxter Callan',
        rating: 4,
        timestamp: '30 June 2014',
        reviewText: 'Not bad hombre.'
      }]
    }
  });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', {
    title: 'Review Higher Ground on Melbit',
    pageHeader: { title: 'Review Higher Ground' }
  });
};
