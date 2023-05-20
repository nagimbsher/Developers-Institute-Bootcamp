//Example XML - HTTP Request & Response
//Table Of Contents
//Feedback
//Last updated : March, 17th 2023


//1st step

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://zivuch.github.io/emails.xml');

xhr.withCredentials = false;

xhr.responseType = 'document';
xhr.send();


//2nd step

xhr.onload = function(){
  if(xhr.status != 200){
    console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
  }
  else{
    console.log(xhr.response);
    loadXml(xhr.response);
  }
}

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }
};

xhr.onerror = function() {
  console.log('Error something wrong###');
};


//3rd step

function loadXml(xmlDoc) {
      var cd = xmlDoc.getElementsByTagName("email");
      for (let i = 0; i <cd.length; i++) {
          console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
          console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
      }
}


/*emails.xml

  <email>
    <to>Vimal</to>
    <from>Sonoo</from>
    <heading>Hello</heading>
    <body>Hello brother, how are you!</body>
  </email>
  <email>
    <to>Peter</to>
    <from>Jack</from>
    <heading>Birth day wish</heading>
    <body>Happy birth day Tom!</body>
  </email>
  <email>
    <to>James</to>
    <from>Jaclin</from>
    <heading>Morning walk</heading>
    <body>Please start morning walk to stay fit!</body>
  </email>
  <email>
    <to>Kartik</to>
    <from>Kumar</from>
    <heading>Health Tips</heading>
    <body>Smoking is injurious to health!</body>
  </email>*/
