const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const controllers = require('./controllers/mainController');

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: () => true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(controllers);

module.exports = app;
