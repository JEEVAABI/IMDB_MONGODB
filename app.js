const express = require("express");
const app = express();
const PORT = 3400;

app.get('/',(request,response) =>{
    response.send('app.js')
})

app.listen(PORT)