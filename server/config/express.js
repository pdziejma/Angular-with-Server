var config = require('./config'),
 express = require('express'),
 morgan = require('morgan'),
 compress = require('compression'),
 bodyParser = require('body-parser'),
 methodOverride = require('method-override'),
 session = require('express-session');

var uri = 'mongodb://localhost/animals';
var db = require('mongoose').createConnection(uri);

module.exports = function() {
 var app = express();
 
 if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
 } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
 }

 app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());
 app.use(methodOverride());

 app.use(session({
   saveUninitialized: true,
   resave: true,
   secret: config.sessionSecret
}));

 app.set('views', './app/views');
 app.set('view engine','ejs');
 app.use(express.static('./public'));

 require('../app/routes/index.server.routes.js')(app);
 require('../app/routes/animals.server.routes.js')(app);

 return app;
};