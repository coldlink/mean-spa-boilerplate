//modules
var express        = require('express');
var mongoose       = require('mongoose');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');

//config files
var db = require('./config/db');

//connect to mongo
mongoose.connect(db.url);

//port
var port = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

//logging
app.use(morgan('combined'));

// routes
require('./app/routes')(app);

// startup
app.listen(port);
console.log('Server started on port:', port);

exports = module.exports = app;
