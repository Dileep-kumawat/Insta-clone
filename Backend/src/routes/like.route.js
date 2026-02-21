const express = require("express");
const authMidlleware = require("../middlewares/auth.middleware");
const { likeController, unlikeController } = require("../controllers/like.controller");

const likeRouter = express.Router();

/**
 * @route POST /api/likes/like/:id
 * @description Likes the post with user id
 */
likeRouter.post("/like/:id", authMidlleware, likeController);

/**
 * @route POST /api/likes/unlike/:id
 * @description UnLikes the post with user id
 */
likeRouter.delete("/unlike/:id", authMidlleware, unlikeController);

module.exports = likeRouter;