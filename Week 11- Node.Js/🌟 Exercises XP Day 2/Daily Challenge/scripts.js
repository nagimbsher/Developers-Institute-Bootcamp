
const http = require("http");
const { largeNumber ,getCurrentDate} = require("./main.js");
const sever = http.createServer(handleResponse);
const port = 8080;
const host = "localhost";


function handleResponse(req, res){
    res.setHeader("content-Type" ,"text/html");
    res.writeHead(201)

 res.end(`
<p> The date and time are: ${getCurrentDate()}<p>
`);

}
function sayHello(){
console.log("sever is running on port", port);
}
sever.listen(port,host, function () {
    console.log("Sever is listening on port", port);
});