var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var mongoose = require('mongoose');

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');
var messaging = require('./routes/messaging');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://amalsameh.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'H0uSRbXXr_06okCHHT3RYDKCv8pSS5KW',
    issuer: "https://amalsameh.auth0.com/",
    algorithms: ['RS256']
});

app.use('/', authCheck, index);
app.use('/users', authCheck, users);
app.use('/messages', authCheck, messaging);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function () {
    var url = 'mongodb://admin:admin@ds113841.mlab.com:13841/cycling_club';
    mongoose.connect(url);
    global.db = mongoose.connection;
    console.log('listening on 3000')
});
module.exports = app;
