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