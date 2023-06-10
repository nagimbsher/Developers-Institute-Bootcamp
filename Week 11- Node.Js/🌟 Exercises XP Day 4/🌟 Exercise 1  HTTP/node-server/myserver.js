var http = require('http');


http.createServer(function (req, res) {
  res.write('This is my first response!'); 
  //res.write('This is my second response');
  
  res.end(); 
}).listen(8080); 