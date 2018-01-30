const app = require('../src/app')
const http = require('http')
const debug = require('debug')('api_node:server')
const express = require('express')

const port = 3000
app.set('port', port);

const server = http.createServer(app)

server.listen(port, () => {
    console.log('servidor rodando na porta 3000')
})