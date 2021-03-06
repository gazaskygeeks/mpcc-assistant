const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const controllers = require('./controllers/mainController');

app.use(morgan('dev'));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: 'application/pdf' }));

app.set('port', process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.use(controllers);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app;
