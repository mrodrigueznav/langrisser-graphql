const express = require('express');
const error = require('../middleware/error');
const character = require('../routes/characters');

module.exports = function r(app) {
  app.use(express.json());
  app.use('/api/character', character);
  app.use(error);
};
