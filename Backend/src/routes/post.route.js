const express = require("express");
const { postCreateController, getPostsController, getPostDetailsController, getAllPostsController } = require("../controllers/post.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

const postRouter = express.Router();

/**
 * POST api/post/
 */
postRouter.post("/", upload.single("imgUrl"), authMiddleware, postCreateController);

/**
 * GET api/post/
 */
postRouter.get("/", authMiddleware, getPostsController);

/**
 * GET api/post/all
 */
postRouter.get("/all",authMiddleware, getAllPostsController);

/**
 * GET api/post/details/:id
 */
postRouter.get("/details/:id", authMiddleware, getPostDetailsController);

module.exports = postRouter;