const mongoose = require("mongoose")

const uData = mongoose.Schema({
    name:String,
    age:Number
})
const userData = mongoose.model("userData", uData)
module.exports = userData