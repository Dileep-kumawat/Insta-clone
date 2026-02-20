const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { followController, unFollowController } = require("../controllers/follow.controller");

const followRouter = express.Router();

/**
 * @route POST api/follows/:id
 * @description Follows the id user wants
 */
followRouter.post("/:id", authMiddleware, followController);

/**
 * @route DELETE api/follows/unfollow/:id
 * @description Un Follows the id user wants
 */
followRouter.delete("/unfollow/:id", authMiddleware, unFollowController);

module.exports = followRouter;