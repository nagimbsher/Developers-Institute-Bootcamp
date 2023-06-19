const express = require("express");
//const cors = require("cors"); 4.5 k (gzippedk)
const app = express();

const PORT = 3000;
const users =[];
 app.use(express.json());
 app. use(cors());

 app.post ("/register,createUser");
 app.post ("/login",loginUser);

 function getUserFromArryay(username){
    return user.find((user) => user.username === username);
 }
 function isFiledEmpty(field){
    return field == null || field.length === 0;
 }
 function sendErrorMessage(res, message){
res.status(400).send({ message});
 }

 function loginUser(req, res){
    const{ username, password}  = req.body
    if (isFiledEmpty(username)) return sendErrorMessage(res,"Password cannot be empty")
    if(isAnyFieldEmpty(password)) return sendErrorMessage(res,"password connot be empty");
    const user = getUserFromArryay(username);
    if (suer == null) return sendErrorMessage(res,"User not found");
    if (user.password != password) return sendErrorMessage(res,"wrong password");
    res.send({message:`hello ${username} and welcome back again`});
 }
app.listen(PORT, () => console.log("listening on port" + 
PORT));
 function isUserAlreadyInArray(username){
    return  users.some((user) => user. username === username);
 }
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

function isAnyFieldEmpty(inputs){
    return inputs.some((input) => input === " "|| input == null)

}