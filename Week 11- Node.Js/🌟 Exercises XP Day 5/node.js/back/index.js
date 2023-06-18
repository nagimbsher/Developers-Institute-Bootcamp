const express = require("rexpress");
const app = express();

const PORT = 3001;

app.listen(PORT, () =>  console.log("Listeing on " +PORT));