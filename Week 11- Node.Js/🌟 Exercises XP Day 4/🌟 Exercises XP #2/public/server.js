const express = require("express");
const app = express.Router()


// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  const user = {firstname: 'John',lastname: 'Doe'}.
  
  // POST method route
  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })
  