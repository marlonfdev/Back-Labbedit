import express from "express"
import { CommentController } from "../controller/CommentControlle"
import { commentBusiness } from "../business/CommentBusiness"
import { CommentsDatabase } from "../database/CommentsDatabase"
import { LikeDislikeCommentDatabase } from "../database/LikeDislikeCommentDatabase"
import { TokenManager } from "../services/TokenManager"
import { PostsDatabase } from "../database/PostDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const commentRouter = express.Router()

const commentController = new CommentController(
  new commentBusiness(
    new CommentsDatabase(),
    new LikeDislikeCommentDatabase(),
    new TokenManager(),
    new PostsDatabase(),
    new IdGenerator()
  )
)
commentRouter.get("/:id", commentController.getComments)
commentRouter.post("/:id", commentController.createComment)
commentRouter.put("/:id/:commentId", commentController.editComment)
commentRouter.put("/:id/:commentId/like", commentController.likeDislikeComment)
commentRouter.delete("/:id/:commentId", commentController.deleteComment)