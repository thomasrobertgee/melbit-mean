var mongoose = require( 'mongoose' );
var gracefulShutdown;
var dbURI = 'mongodb://localhost:27017';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
}
// mongodb://thomas:gee@ds155418.mlab.com:55418/heroku_s9z4pj0p
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// for nodemon restarts
process.once('SIGURS2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGURS2');
  });
});

// for app termination
process.once('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});

// for heroku app termination
process.once('SIGTERM', function () {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});

require('./locations');
