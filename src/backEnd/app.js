const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const controllers = require('./controllers/mainController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: () => true }));

app.set('port', process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.use(controllers);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app;
