const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/auth.route");
const postRouter = require("./routes/post.route");
const followRouter = require("./routes/follow.route");
const likeRouter = require("./routes/like.route");
const savedRouter = require("./routes/saved.route");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_ENDPOINT
}));

/**
 * Auth routes
 */
app.use("/api/auth", authRoute);

/**
 * Post routes
 */
app.use("/api/post", postRouter);

/**
 * Follow routes
 */
app.use("/api/follows", followRouter);

/**
 * Likes routes
 */
app.use("/api/likes", likeRouter);

/**
 * Saves routes
 */
app.use("/api/saves", savedRouter);

module.exports = app;