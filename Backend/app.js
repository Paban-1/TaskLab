const express = require("express")
const app = express()
const cookieParser = require("cookie-parser");

const db = require("./config/mongoose-connection")

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

const userRouter = require("./routes/userRouter")

app.use("/user", userRouter);


app.listen(3000, () => {
    console.log("PORT is runing on :3000");
})
