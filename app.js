var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  mongoose = require ('mongoose'),
  app = express();

mongoose.connect('mongodb://localhost/telemarck');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "jade");

app.use('/static',express.static(path.join(__dirname, '/node_modules')));
app.use('/static',express.static(path.join(__dirname, '/publico')));

app.use('/', require('./controladores/index'));

app.listen(3000);
