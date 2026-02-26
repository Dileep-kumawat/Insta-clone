const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { followController, unFollowController, getPendingFollowersController, acceptFollowRequestController, rejectFollowRequestController, getNoOffollowersController, getNoOfFollowingsController } = require("../controllers/follow.controller");

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

/**
 * @route GET api/follows/nooffollowers
 * @description return the no of followers of an user
 */
followRouter.get("/nooffollowers", authMiddleware, getNoOffollowersController);

/**
 * @route GET api/follows/nooffollowings
 * @description return the no of followings of an user
 */
followRouter.get("/nooffollowings", authMiddleware, getNoOfFollowingsController);

module.exports = followRouter;