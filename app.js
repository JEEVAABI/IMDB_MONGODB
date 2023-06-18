require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express");
const app = express();
const PORT = 3400;

const MovieRouter = require('./routers/MovieRouter');
//const { db } = require('./models/MovieModel');
// const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error",(errorMessage)=>console.log(errorMessage))
db.once("open",()=>console.log("connenction Established"))

app.get('/',(request,response) =>{
    response.status(200).send('This is WORKING!!!')
})

app.use(express.json())

app.use('/api/v1/movieList',MovieRouter)


app.listen(PORT,console.log(`Server is running at http://localhost:${PORT}`))