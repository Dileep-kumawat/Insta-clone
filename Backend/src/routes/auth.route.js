const express = require("express");
const { registerController, loginController } = require("../controllers/auth.controller");

const authRoute = express.Router();

/**
 * POST api/auth/register
 */
authRoute.post("/register", registerController);

/**
 * POST api/auth/login
 */
authRoute.post("/login", loginController);

module.exports = authRoute;