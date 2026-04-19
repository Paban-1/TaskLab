const express = require("express")
const app = express()
const cookieParser = require("cookie-parser");
const cors = require("cors");

const db = require("./config/mongoose-connection")

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


const userRouter = require("./routes/userRouter")
const taskRouter = require("./routes/taskRouter")

app.use("/user", userRouter);
app.use('/task', taskRouter)


app.listen(3000, () => {
    console.log("PORT is runing on :3000");
})
