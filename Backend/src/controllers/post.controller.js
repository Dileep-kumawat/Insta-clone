const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const postModel = require("../models/post.model");
const savedModel = require('../models/saved.model');

async function postCreateController(req, res) {
    const { caption } = req.body;

    const client = new ImageKit({
        privateKey: process.env['IMAGEKIT_PRIVATE_KEY'],
    });

    const file = await client.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: req.file.originalname,
        folder: "instaClone"
    });

    const post = await postModel.create({
        caption,
        imgUrl: file.url,
        user: req.user.id
    });

    if (!post) {
        return res.status(500).json({
            "msg": "post not created"
        });
    }

    res.status(201).json({
        "msg": "post created successfully",
        post
    });
}

async function getPostsController(req, res) {
    const posts = await postModel.find({
        user: req.user.id
    }).populate("user").lean();

    const updatedPosts = await Promise.all(
        posts.map(async (post) => {
            const saved = await savedModel.findOne({
                post: post._id,
                user: req.user.id
            });

            return {
                ...post,
                isSavedPost: !!saved
            };
        })
    );

    res.status(200).json({
        posts: updatedPosts
    });
}

async function getAllPostsController(req, res) {
    const posts = await postModel.find().populate("user").lean();

    const updatedPosts = await Promise.all(
        posts.map(async (post) => {
            const saved = await savedModel.findOne({
                post: post._id,
                user: req.user.id
            });

            return {
                ...post,
                isSavedPost: !!saved
            };
        })
    );

    res.status(200).json({
        posts: updatedPosts
    });
}

async function getPostDetailsController(req, res) {
    const post = await postModel.findById(req.params.id);

    if (!post) {
        return res.status(404).json({
            "msg": "Post not found"
        });
    }

    const isUserspost = post.user.toString() === req.user.id;

    if (!isUserspost) {
        return res.status(401).json({
            "msg": "You can't access this post | unauthorized"
        });
    }

    res.status(200).json({
        post
    });
}

module.exports = {
    postCreateController,
    getPostsController,
    getPostDetailsController,
    getAllPostsController
}