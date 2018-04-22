const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mainRoutes = require('./routes/index.js');
const adminRoutes = require('./routes/adminRoutes');
const db = require('./db');
const helpers = require('./helpers');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

app.get('/', mainRoutes);
//app.get('/admin', adminRoutes);



app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`App running on port ${server.address().port}`);
});