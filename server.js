const express = require('express');
const serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + "/www"));

const port = process.env.PORT || 5000;
app.listen(port);

// eslint-disable-next-line
console.log('server started '+ port);
