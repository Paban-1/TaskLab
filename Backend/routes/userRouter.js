const express = require("express");
const router = express.Router()
const userModel = require("../models/user-model")


// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
        let users = await userModel.find();
        if (users.length > 0) {
            return res
                .status(502)
                .send("User already exists")
        }

        let {fullname, email, password} = req.body

       let createdUser= await userModel.create({
            fullname,
            email,
            password
        })
        res.send(createdUser)
    })
}

router.get('/', function (req, res) {
    res.send("hello")
})



module.exports = router