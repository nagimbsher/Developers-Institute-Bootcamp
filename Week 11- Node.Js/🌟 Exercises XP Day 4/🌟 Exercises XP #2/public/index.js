const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const user = {
         firstname:'John',
         lastName: 'Doe'
    }
    res. send(user);
});

app.listen(3000)