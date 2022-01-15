const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const route = require("./routes/route")
var bodyParser = require('body-parser');

app.use(express())
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: false
 }));
 app.use(bodyParser.json());

app.use("/", route)

const PORT = 3001
const URL = "mongodb+srv://rkshawon:shawon16@reactcrud.t974l.mongodb.net/crud?retryWrites=true&w=majority"


mongoose.connect(URL).then(()=>{
    app.listen(PORT, ()=>{
        console.log("server started at port 3001")
    })
}).catch(err=>{
        console.log("error" + err)
})
