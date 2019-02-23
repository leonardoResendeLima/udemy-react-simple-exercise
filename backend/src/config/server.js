const port = 3003;

const express = require('express');
const bodyparser = require('body-parser');

const cors = require('./cors');

const server = express();

server.use(bodyparser.urlencoded({ extended: true }));
server.use(bodyparser.json());
server.use(cors);

server.listen(port, function () {
    console.log(`Backend is running on ${port}.`)
})

module.exports = server