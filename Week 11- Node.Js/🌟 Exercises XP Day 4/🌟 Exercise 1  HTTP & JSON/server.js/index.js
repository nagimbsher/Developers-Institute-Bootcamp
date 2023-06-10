const express = require('express')
const app = express()
app.get('/user', function (req, res) {
  res.send({firstName:'Johan', lastName:'Doe'})
})


app.listen(3000, function(){
  console.log('Example app listening on port 8080')
})