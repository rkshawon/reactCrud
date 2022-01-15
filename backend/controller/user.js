const Model = require("../models/model")

const getData = (req, res)=>{
    Model.find()
    .then((user)=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "error occured"} )
    })
   
}
const addData = (req, res)=>{
    const store = new Model({
        name: req.body.name,
        age: req.body.age
    })
    store.save()
    .then(user=>{
        res.send(user)
        console.log("added" + user)
    })
}

const updateData = (req, res)=>{
    const id = req.body.id
    console.log(id)
    const updatedData = {
        name: req.body.name,
        age: req.body.age,
    }
    Model.findByIdAndUpdate(id, {$set: updatedData})
    .then(id=>{
        console.log("update " + id)
        res.send(id)
    }).catch(err=>{
        res.send("err" + err)
    })
}
const getView = (req, res) => {
    // const id = req.params.id
    Model.findById(req.params.id)
    .then(data => {
        res.send(data)
    }).catch(err=>{
        console.log("err" + err)
    }) 
}
const deleteData = (req, res)=>{
    const id = req.params.id
    Model.findOneAndDelete(id)
    .then(id=>{
        console.log("delete " + id)
    }).catch(err=>{
        res.send("err" + err)
    })
}

module.exports = { getData, addData, updateData, deleteData, getView }