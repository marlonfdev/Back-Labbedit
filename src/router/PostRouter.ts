import express from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostsDatabase } from "../database/PostDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { LikeOrDislikeDatabase } from "../database/LikeDislikeDatabase"
import { UsersDatabase } from "../database/UserDatabase"
import { PostsController } from "../controller/PostController"

export const postRouter = express.Router()

const postController = new PostsController(
  new PostBusiness(
    new PostsDatabase(),
    new IdGenerator(),
    new TokenManager(),
    new LikeOrDislikeDatabase(),
    new UsersDatabase()
  )
)

postRouter.get("/", postController.getPosts)
postRouter.post("/", postController.createPosts)
postRouter.put("/:id", postController.editPost)
postRouter.put("/:id/like", postController.likeOrDislike)
postRouter.delete("/:id", postController.deletePost)