const express = require("express");
const authMidlleware = require("../middlewares/auth.middleware");
const { saveController, unSaveController,getSavedController } = require("../controllers/saved.controller.js");

const savedRouter = express.Router();

/**
 * @route GET /api/saves/
 * @description Get all Saved post of the user
 */
savedRouter.get("/", authMidlleware, getSavedController);

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