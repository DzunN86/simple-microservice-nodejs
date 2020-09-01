require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const courseRouter = require('./routes/courses');
const mediaRouter = require('./routes/media');
const orderRouter = require('./routes/orders');
const paymentRouter = require('./routes/payments');
const refreshTokenRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', verifyToken, courseRouter);
app.use('/media', mediaRouter);
app.use('/orders', orderRouter);
app.use('/payments', paymentRouter);
app.use('/refresh-tokens', refreshTokenRouter);
app.use('/refresh-tokens', refreshTokenRouter);
app.use('/mentors', mentorsRouter);

module.exports = app;
