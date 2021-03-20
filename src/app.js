const express = require('express');
const logger = require('morgan');

const router = require("./routes");

var cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

module.exports = app;