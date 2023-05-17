function first (){
    console.log('first');
}

function secound(){
    first();
console.log('secound');
}

function third(){
    console.log('third');
}
 
setTimeout(() => {
 first();
},500)
 
secound();
third();

//Synchronous & Asynchronous Programming
//let xhr = new XMLHttpRequest ();
// open method, url [async, user password]
//xhr.open ('get',)
//onload
//xhr.send();
//console.








// This section is non-normative.

// The XMLHttpRequest object is an API for fetching resources.

// The name XMLHttpRequest is historical and has no bearing on its functionality.

// Some simple code to do something with data from an XML document fetched over the network:


function processData(data) {
  // taking care of data
}

function handler() {
  if(this.status == 200 &&
    this.responseXML != null &&
    this.responseXML.getElementById('test').textContent) {
    // success!
    processData(this.responseXML.getElementById('test').textContent);
  } else {
    // something went wrong
    //…
  }
}

var client = new XMLHttpRequest();
client.onload = handler;
client.open("GET", "unicorn.xml");
client.send();
//If you just want to log a message to the server:

function log(message) {
  var client = new XMLHttpRequest();
  client.open("POST", "/log");
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(message);
}
//Or if you want to check the status of a document on the server:

function fetchStatus(address) {
  var client = new XMLHttpRequest();
  client.onload = function() {
    // in case of network errors this might not give reliable results
    returnStatus(this.status);
  }
  client.open("HEAD", address);
  client.send();
}