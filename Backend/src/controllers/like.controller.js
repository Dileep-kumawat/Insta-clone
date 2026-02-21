const likeModel = require("../models/like.model");
const postModel = require("../models/post.model");

async function likeController(req, res) {
    const post = req.params.id;
    const user = req.user.id;
    let isPostExist = null;
    try {
        isPostExist = await postModel.findById(post);
    } catch (error) {
        return res.status(400).json({
            'msg': "The post id is invalid"
        });
    }

    if (!isPostExist) {
        return res.status(404).json({
            "msg": "The post doesn't exist"
        });
    }

    const isAlreadyLiked = await likeModel.findOne({ post, user });

    if (isAlreadyLiked) {
        return res.status(409).json({
            "msg": "You can't like post again"
        });
    }

    const likeRecord = await likeModel.create({
        post,
        user
    });

    res.status(201).json({
        "msg": "Post is liked successfully",
        likeRecord
    });
}

async function unlikeController(req, res) {
    const post = req.params.id;
    const user = req.user.id;

    let unLikedRecord = null;
    try {
        unLikedRecord = await likeModel.findOneAndDelete({ post, user });
    } catch (error) {
        return res.status(400).json({
            "msg": "Something went wrong"
        });
    }

    res.status(200).json({
        "msg": "The post is unliked successfully",
        unLikedRecord
    });
}

module.exports = {
    likeController,
    unlikeController
}