const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { followController, unFollowController, getPendingFollowersController, acceptFollowRequestController, rejectFollowRequestController } = require("../controllers/follow.controller");

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

/**
 * @route GET api/follows/pendings
 * @description Get all the pending follow requests
 */
followRouter.get("/pendings", authMiddleware, getPendingFollowersController);

/**
 * @route PATCH api/follows/accept/:id
 * @description accept the follow request
 */
followRouter.patch("/accept/:id", authMiddleware, acceptFollowRequestController);

/**
 * @route PATCH api/follows/reject/:id
 * @description reject the follow request
 */
followRouter.patch("/reject/:id", authMiddleware, rejectFollowRequestController);

module.exports = followRouter;