const ImageKit = require("@imagekit/nodejs");
const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");
const { toFile } = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const postCreateController = async (req, res) => {

    let decoded;
    try {
        decoded = jwt.verify(req.cookies.jwt_token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).json({
            "msg": "The token is unauthorized"
        });
    }

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test"
    });

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    });

    res.status(201).json({
        "msg": "The post is created successfully",
        post
    });
}

const getPostsController = async (req, res) => {
    const token = req.cookies.jwt_token;

    if (!token) {
        return res.status(401).json({
            "msg": "Token not found"
        });
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).json({
            "msg": "The token is unauthorized"
        });
    }

    const posts = await postModel.find({
        user: decoded.id
    });

    res.status(200).json({
        msg: "The posts are fetched",
        posts
    });
}

const getPostDetailsController = async (req, res) => {
    const token = req.cookies.jwt_token;

    if (!token) {
        return res.status(401).json({
            "msg": "Token not found"
        });
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).json({
            "msg": "The Token is unauthorized"
        });
    }

    const post = await postModel.findById(req.params.id);

    if (!post) {
        return res.status(404).json({
            "msg": "The post not found"
        });
    }

    const isUserValid = post.user.toString() === decoded.id;

    if (!isUserValid) {
        return res.status(401).json({
            "msg": "The user is unauthorized"
        });
    }

    res.status(200).json({
        "msg": "The post is fetched",
        post
    });
}

module.exports = {
    postCreateController,
    getPostsController,
    getPostDetailsController
}