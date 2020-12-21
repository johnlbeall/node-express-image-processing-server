
const express = require('express');
const path = require('path');

const app = express();

const pathToIndex = path.resolve(__dirname,"../client/index.html");
module.exports = app;

app.use('/*', (request, response) => {
    response.sendFile(pathToIndex);
  });