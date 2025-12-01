const http = require('http');


const server = http
 .createServer((req, res) => {
  res.statusCode =200
  res.setHeader('Content-Type', 'text/plain')
  res.write('Halo Dunia')
  res.end()

 })
 .listen(2000)