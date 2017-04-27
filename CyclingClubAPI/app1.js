var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var lessMiddleware = require('less-middleware');



var index = require('./routes/index');
var clubs = require('./routes/clubs');
//var posts= require('./routes/posts');
//var multer =require('multer');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(fileUpload());
//app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


//app.locals.db = mongo.db('mongodb://localhost:27017/conFusion',{native_parser:true});
var mongoose= require('mongoose');
mongoose.connect('mongodb://admin:admin@ds113841.mlab.com:13841/cycling_club');

app.use('/', index);
app.use('/clubs', clubs);
//app.use('/posts',posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
 // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 app.listen(3000,function(){
  console.log('listening on port 3000');
})
module.exports = app;
