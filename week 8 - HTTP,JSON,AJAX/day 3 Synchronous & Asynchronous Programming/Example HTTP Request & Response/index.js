//Last updated : March, 17th 2023


//Create a new XMLHttpRequest object

let xhr = new XMLHttpRequest();


//Configure it: GET-request for the URL /article/…/load

Syntax:

//xhr.open(method,url,[true,user,pass]);
//Some Example

xhr.open('GET', 'https://zivuch.github.io/data.json');
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');


//Configure the response type

xhr.responseType = 'json';


//Send the request over the network

xhr.send();


//This will be called after the response is received

xhr.onload = function() {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    // e.g. 404: Not Found
    // console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else { // show the result
    // response is the server response
    // console.log(`Done, got ${xhr.response.length} bytes`);
    console.log(xhr.response);
  }
};


xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    // console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    // console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }
};


xhr.onerror = function() {
  console.log("Request failed");
};
