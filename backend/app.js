var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', require("./routes/authenRoutes"));
app.use('/agency', require("./routes/agencyRoutes"));
app.use('/rank', require("./routes/rankRoutes"));
app.use('/car', require("./routes/carRoutes"));
app.use('/chauffeur', require("./routes/chauffeurRoutes"));
app.use('/reserve', require("./routes/reserveRoutes"));
module.exports = app;
