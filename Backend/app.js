const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("working")
})

app.get("/add", (req, res) => {
    res.send("add")
})

app.get("/delete", (req, res) => {
    res.send("delete")
})

app.listen(3000, () => {
    console.log("PORT is runing on :3000");
})
