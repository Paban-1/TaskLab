const express = require("express");
const router = express.Router()
const taskModel = require("../models/task-model")

router.post('/task-create', async function (req, res) {
    let { title, description,  } = req.body
    
    let createdTask = await taskModel.create({
        title,
        description,
    })
    res.status(201).send(createdTask)
})
router.get('/', function (req, res) {
    res.send("hello taskRouter")
})

module.exports = router