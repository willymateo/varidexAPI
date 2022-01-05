//Npm modules.
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var express = require('express');
var logger = require('morgan');
const cors = require('cors');
var path = require('path');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var customersRouter = require('./routes/customers');
var ordersRouter = require('./routes/orders');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(cookieParser());
app.use(cookieSession({
name: 'session',
keys: ['DAWM'],
// Cookie Options
maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/customers', customersRouter);
app.use('/orders', ordersRouter);

module.exports = app;
