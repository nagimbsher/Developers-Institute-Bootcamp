const express = require("express");
const app = express();


const PORT =3000;
app.use("/form", express.static("public"));
app.use(express.json());

app.get("/aboutMe/:hobby", handleHobby);
app.get("/pic", displayPic);
app.post("/formData", handlePost);
app.listen(PORT);

function handlePost(req, res){
    const email = req.body.email;
    const message = req.body.message;
    res.send(`${email} sent a message: ${message}`);
}

function displayPic(req,res){
    res.send("<img src = 'https://i.imgur.com/4m8L6uT.jpeg'/>");
}

function handleHobby(req, res){
    const hobby = req.params.hobby;
    if (!isOnlyLetters(hobby)) return res.status(404).send
    ("only letters please");
    res.send("Nice hobby");
   
}
function isOnlyLetters(str){
const noNumbersRegex = /^[A-Za-z]+$/;
return noNumbersRegex.test(str);
}
