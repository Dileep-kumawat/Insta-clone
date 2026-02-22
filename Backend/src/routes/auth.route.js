const express = require("express");
const { registerController, loginController, getMeController } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const authRoute = express.Router();

/**
 * POST api/auth/register
 */
authRoute.post("/register", registerController);

/**
 * POST api/auth/login
 */
authRoute.post("/login", loginController);

/**
 * GET api/auth/get-me
 */
authRoute.get("/get-me", authMiddleware, getMeController);

module.exports = authRoute;