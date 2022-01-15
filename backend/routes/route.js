const express = require("express")
const route = express.Router()
const controller = require("../controller/user")

route.get("/", controller.getData)
route.post("/add", controller.addData)
route.get("/view/:id", controller.getView)
route.post("/update", controller.updateData)
route.delete("/delete/:id", controller.deleteData)

module.exports = route