const express = require("express");
const router = express.Router()
const taskModel = require("../models/task-model")

router.post('/task-create', async function (req, res) {
    let { title, description, } = req.body
    console.log("req.body This is:", req.body);

    let createdTask = await taskModel.create({
        title,
        description,
    })
    res.status(200).send(createdTask)
})

router.get("/all", async function (req, res) {
    try {
        let tasks = await taskModel.find()
        res.status(202).json(tasks)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }

})

router.get('/', function (req, res) {
    res.send("hello taskRouter")
})

module.exports = router