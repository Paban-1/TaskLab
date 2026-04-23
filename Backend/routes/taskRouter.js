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

router.delete("/:id", async function (req, res) {
    try {
        const deleteTask = await taskModel.findByIdAndDelete(req.params.id)

        if (!deleteTask) {
            return res.status(404).json({ message: "Task not found" })
        }

        res.status(200).json({ message: "Task delete successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { title, description, flag } = req.body;

        const updatedTask = await taskModel.findByIdAndUpdate(
            req.params.id,
            { title, description, flag },
            { new: true }
        )

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not Found" })
        }
        res.status(200).json(updatedTask)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
})

router.get('/', function (req, res) {
    res.send("hello taskRouter")
})

router.get("/:id", async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router