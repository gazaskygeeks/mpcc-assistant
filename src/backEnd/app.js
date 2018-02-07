const express = require('express');
const path = require('path');

const app = express();

const controllers = require('./controllers/mainController');

app.set('port', process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.use(controllers);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app;
