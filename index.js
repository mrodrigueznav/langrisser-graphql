const winston = require('winston');
const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*',
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
};
app.use(cors(corsOptions));

// require('./startup/logging')();
require('./startup/routes')(app);
// require('./startup/firebase')();
// require('./startup/db')();
// require('./startup/config')();
// require('./startup/validation')();
// console.log(process.env.PORT);
const port = process.env.PORT || 3001;
// winston.info(`Environment ${process.env.NODE_ENV}`);

const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;
