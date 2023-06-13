
const fs = require("fs");


function writeFileCallback(err){
    if (err!= null){
        console.log("There was an error",err);
    
    }else{
        console.log("We finished writing in the file");
    }
    }
    
    function deleteFileCallback(err){
    if (err != null){
        console,log("could not delete file")
    }else{
        console.log("file deleted");
    }
    }
    fs.appendFile("data.text","good \nsee you morning", writeFileCallback)
        fs.unlink("data.text", deleteFileCallback);
    

//.saync = synchronous
// one thing at a time, all tasks wait for each other LO 
//if one Line takes a long time, the next line will be. blocked

// ASYNC = asynchronous 
// tasks can run in the background 
 // you can run a function that will continue in the. background 
 // even a heavy function will not block-your-code 11 12 
 // THERE ARE THREE WAYS TO WORK WITH ASYNC 13 
 //-1.  CALLBACKS 
// 2. PROMISES with..then().catch() 14 15 
//.3. PROMISES with async/await