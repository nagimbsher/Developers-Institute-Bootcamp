const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


//put-update- modify product
//api/products/11-params
//{"mame":"iphone14","price:800"} body
app.put('api/products/:id',(req,res) =>{
    con

})


