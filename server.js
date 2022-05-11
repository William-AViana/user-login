const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const http = require('http');

const connectToDataBase = require('./src/database/database')

connectToDataBase();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'aplication/json' });
  res.end(JSON.stringify({
    msg: 'Bem vindo a API!'
  }));
});

server.listen(3000)
