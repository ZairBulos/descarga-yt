const express = require('express');
require('express-async-errors');
const cors = require('cors');

const ytRouter = require('./controllers/youtube');
const middleware = require('./utils/middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/youtube', ytRouter);

app.use(middleware.unknownEndpoint);

module.exports = app;