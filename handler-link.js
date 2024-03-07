'use strict';
const fs = require('node:fs');

//とっぷにアクセス
function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      const rs = fs.createReadStream('./index.html');
      rs.pipe(res);
      break;
    default:
      break;
  }
}

function handleToyBox(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  const rs = fs.createReadStream('./page/toybox.html');
  rs.pipe(res);
}

function handleWork(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  const rs = fs.createReadStream('./page/work.html');
  rs.pipe(res);
}

//ここからMOON
function handleMoon(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  const rs = fs.createReadStream('./night/index.html');
  rs.pipe(res);
}

function handleMoonJsFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/javascript',
  });
  const file = fs.readFileSync('./night/index.js');
  res.end(file);
}

function handleMoonDecoFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/javascript',
  });
  const file = fs.readFileSync('./night/deco.js');
  res.end(file);
  }


function handleMoonCssFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/css'
  });
  const file = fs.readFileSync('./night/style.css');
  res.end(file);
}

function handleMoonOnFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/png'
  });
  const image = fs.readFileSync('./night/picture/on.png');
  res.end(image);
}

function handleMoonOffFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/png'
  });
  const image = fs.readFileSync('./night/picture/off.png');
  res.end(image);
}

//開発中のリンク
function handleDev(req,res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  const rs = fs.createReadStream('./page/dev.html');
  rs.pipe(res);
}


//ファビコン(とりあえず放置)
function handleFavicon(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/vnd.microsoft.icon',
    'Cache-Control': 'public, max-age=604800'
  });
  const favicon = fs.readFileSync('./')
  res.end(favicon);
}

//CSSの読み込み
function handleStyleCssFile(req, res) {
  res.writeHead(200, {
    'Content-type': 'text/css'
  });
  const file = fs.readFileSync('./style.css');
  res.end(file);
}

//みんな大嫌い404
function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  const rs = fs.createReadStream('./404.html');
  rs.pipe(res);
}

module.exports = {
  handle,
  handleToyBox,
  handleWork,
  handleMoon,
  handleMoonJsFile,
  handleMoonDecoFile,
  handleMoonCssFile,
  handleMoonOnFile,
  handleMoonOffFile,
  handleStyleCssFile,
  handleNotFound
}