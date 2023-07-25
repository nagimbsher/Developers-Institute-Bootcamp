// //const {db} =require('../config/dbsql.js');
// const {register, login} = require('../modules/users.js');
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const _register = async(req, res) =>{
//     const {email, password} = req.body;
     
//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password,salt)

//     const lower_email = email.toLoweCase();

//     register(email,hash)
//     .then(row =>{
//         res.json(row)
//     })
//     .catch(err =>{
//         console.log(err);
//         res.state(404).json({mas:"user already exist"})
//     })
// };

