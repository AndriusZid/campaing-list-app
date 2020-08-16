const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

let app = express();
app.use(serveStatic(path.join(__dirname, './'), { 'index': ['www/index.html'] }))
app.use(serveStatic(path.join(__dirname, './www')))

const port = process.env.PORT || 5000;
app.listen(port);

// eslint-disable-next-line
console.log('server started '+ port);
