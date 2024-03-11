'use strict';
const link = require('./handler-link')

function route(req, res) {
  switch (req.url) {
    case '/top':
      link.handle(req, res);
      break;
    case '/toybox':
      link.handleToyBox(req, res);
      break;
    case '/work':
      link.handleWork(req, res);
      break;
    case '/moon':
      link.handleMoon(req, res);
      break;
    case '/moon/index.js':
      link.handleMoonJsFile(req, res);
      break;
    case '/moon/on.png':
      link.handleMoonOnFile(req, res);
      break;
    case '/moon/off.png':
      link.handleMoonOffFile(req, res);
      break;
    case '/moon/deco.js':
      link.handleMoonDecoFile(req, res);
      break;
    case '/moon/style.css':
      link.handleMoonCssFile(req, res);
      break;
    case '/dev':
      link.handleDev(req,res);
      break;
    case '/favicon.ico':
      link.handleFavicon(req,res);
      break;
    case '/style.css':
      link.handleStyleCssFile(req, res);
      break;
    default:
      link.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};