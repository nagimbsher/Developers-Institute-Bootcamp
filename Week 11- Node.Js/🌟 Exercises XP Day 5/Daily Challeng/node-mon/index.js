const express = require("express");
const app = express()

const PORT = 3000;

 app.use(express.json());

 app.post ("/register,createUser");
app.listen(PORT, () => console.log("listening on port" + 
PORT));

function createUser(req, res){
    console.log("request received",req.body);
    if (!isRequestValid())
    return res.status(400).send({message:"Please fill in all information correctly"})
    res.send({message:"Request.received"});
}

function isRequestValid(body) {
    const {first,last, email, username, password} =body;
    if (isAnyFieldEmpty({first,last, email, username, password})) return false;
    return true
}

function isAnyFieldEmpty(body){
    return inputs.some((input) => input === " "|| input == null)

}