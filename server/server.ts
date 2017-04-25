/// <reference path="./typings/index.d.ts" />

import express = require('express');
import path = require('path');
import BaseRoutes = require("./routes/Routes");

var port: number = process.env.PORT || 3000;
var app = express();

app.set('port', port);

app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));

// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

// app.get('/*', renderIndex);
app.use('/api', new BaseRoutes().routes);
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

export { app }
