var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/route_app');

var app = express();
var ejs = require('ejs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.engine('.html', ejs.__express);
app.set('view engine', 'html');// app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//获得get请求，第一个参数是匹配内容，第二个参数是匹配成功后执行的回调函数
app.get('/', routes.index);  
app.get('/index', routes.index);  
app.get('/indexen', routes.indexen);  
app.get(/\/detail/, routes.detail);  
app.get('/register', routes.register);  
app.get('/registeren', routes.registeren);  
app.get('/command', routes.command);  
app.get('/commanden', routes.commanden); 
app.get('/search', routes.search); 
app.get('/rule', routes.rule);

app.get('/data', routes.index_data);
app.get('/index/data', routes.index_data);
app.get(/\/index\/poll/, routes.index_poll);
app.get(/\/index\/search/, routes.index_search);
app.get(/\/all\/detail\/data/, routes.detail_data);

app.post(/\/register\/data/, routes.register_data);
//app.post('/vote/index/info', routes.index_info);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
