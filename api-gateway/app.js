require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const courseRouter = require('./routes/courses');
const chaptersRouter = require('./routes/chapters');
const mediaRouter = require('./routes/media');
const orderPaymentsRouter = require('./routes/orderPayments');
const refreshTokenRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const coursesRouter = require('./routes/courses');
const lessonsRouter = require('./routes/lessons');
const imageCoursesRouter = require('./routes/imageCourses');
const myCoursesRouter = require('./routes/myCourses');
const reviewsRouter = require('./routes/reviews');
const webhookRouter = require('./routes/webhook')

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', courseRouter);
app.use('/media', mediaRouter);
app.use('/orders', verifyToken, orderPaymentsRouter);
app.use('/refresh-tokens', refreshTokenRouter);
app.use('/refresh-tokens', refreshTokenRouter);
app.use('/mentors', mentorsRouter);
app.use('/courses', coursesRouter);
app.use('/chapters', chaptersRouter);
app.use('/lessons', verifyToken, lessonsRouter);
app.use('/image-courses', verifyToken, imageCoursesRouter);
app.use('/my-courses', verifyToken, myCoursesRouter);
app.use('/reviews', verifyToken, reviewsRouter);
app.use('/webhook', webhookRouter);

module.exports = app;
