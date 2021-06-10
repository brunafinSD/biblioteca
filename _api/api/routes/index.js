const autores = require('./autoresRoute');
const livros = require('./livrosRoute');
const bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');

module.exports = app => {
  app.use(bodyParser.json(), cors());
  app.get('/', (req, res) => res.send('Olá'));
  app.use(autores, livros);
}