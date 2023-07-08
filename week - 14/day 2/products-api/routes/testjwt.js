const jwt = require('jsonwebtoken');

const token = jwt.sign(
    

       { tex:"js js the king"
        
      // expiresIn:"60s",
    }

);
console.log (token)

//const oldtoken,