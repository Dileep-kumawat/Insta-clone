const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

/**
 * POST api/posts/
 */
postRouter.post("/", upload.single("imgUrl"), postController.postCreateController);

/**
 * GET api/posts/
 */
postRouter.get("/", postController.getPostsController);

/**
 * GET api/posts/details/:id
 */
postRouter.get("/details/:id", postController.getPostDetailsController);

module.exports = postRouter; 