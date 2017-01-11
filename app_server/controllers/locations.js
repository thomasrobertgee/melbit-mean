var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://murmuring-garden-62590.herokuapp.com"
}

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
var renderDetailPage = function (req, res, locDetail) {
  res.render('location-info', {
    title: 'locDetail.name',
    pageHeader: {title: 'locDetail.name'},
    sidebar: {
      context: 'is somewhere to buy coffee with      Bitcoin.',
      callToAction: 'If you\'ve been and you like it, or if you don\'t, please leave a review regardless.'
    },
    location: locDetail
  });
};
module.exports.locationInfo = function(req, res) {
  var requestOptions, path;
  path = "/api/locations/" + req.params.locationid;
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(
    requestOptions,
    function(err, response, body) {
      var data = body;
      if (response.statusCode === 200) {
      data.coords = {
        lng : body.coords[0],
        lat : body.coords[1]
      };
      renderDetailPage(req, res, data);
    } else {
      _showError(req, res, response.statusCode);
    }
  }
  );
};

var _showError = function (req, res, status) {
  var title, content;
  if (status === 404) {
    title = "404, page not found";
    content = "Oh dear. Looks like we can't find this page. Sorry. How about you learn to code and try again";
  } else {
    title = status + ", somthing's gone wrong";
    content = "Something, somewhere, has gone just a little bit wrong.";
  }
  res.status(status);
  res.render('generic-text', {
    title : title,
    content : content
  });
};
/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', {
    title: 'Review Higher Ground on Melbit',
    pageHeader: { title: 'Review Higher Ground' }
  });
};
