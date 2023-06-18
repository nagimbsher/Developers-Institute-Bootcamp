// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

const http = require ('http');

const server = http.createServer(()=> {
    console.log('Thank you bab ');
})
server.listen(3000);