import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { userRouter } from "./router/UserRouter"
import { postRouter } from "./router/PostRouter"
import { commentRouter } from "./router/CommentRouter"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(Number(process.env.PORT), () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`)
})

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)