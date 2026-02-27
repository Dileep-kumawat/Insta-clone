const express = require("express");
const authMidlleware = require("../middlewares/auth.middleware");
const { saveController, unSaveController } = require("../controllers/saved.controller.js");

const savedRouter = express.Router();

/**
 * @route POST /api/saves/save/:id
 * @description Saves the post with user id
 */
savedRouter.post("/save/:id", authMidlleware, saveController);

/**
 * @route POST /api/saves/unsave/:id
 * @description Un Saves the post with user id
 */
savedRouter.delete("/unsave/:id", authMidlleware, unSaveController);

module.exports = savedRouter;