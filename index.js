'use strict';
const http = require('node:http');
const fs = require('node:fs');
const router = require('./router');

const server = http
  .createServer((req, res) => {
  router.route(req, res);
})
.on('error', e => {
  console.error('Server Error', e);
})
.on('clientError', e => {
  console.error('Client Error', e);
});

const port = precess.env.PORT || 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});