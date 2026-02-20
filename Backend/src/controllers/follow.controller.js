const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followController(req, res) {
    const follower = req.user.id;
    const following = req.params.id;

    if (follower === following) {
        return res.status(400).json({
            "msg": "You can't follow yourself"
        });
    }

    let isFollowingExist = null;

    try {
        isFollowingExist = await userModel.findById(following);
    } catch (error) {
        return res.status(400).json({
            "msg": "The user id is invalid"
        });
    }

    if (!isFollowingExist) {
        return res.status(200).json({
            "msg": "The user not exist to follow"
        });
    }

    const isUserAlreadyFollowing = await followModel.findOne({
        follower,
        following
    });

    if (isUserAlreadyFollowing) {
        return res.status(409).json({
            "msg": "you already following the user"
        });
    }

    const followRecord = await followModel.create({
        follower,
        following
    });

    res.status(201).json({
        "msg": "User followed successfully",
        followRecord
    });
}

async function unFollowController(req, res) {
    const follower = req.user.id;
    const following = req.params.id;

    try {
        await followModel.findOneAndDelete({
            follower,
            following
        });
    } catch (error) {
        return res.status(400).json({
            'msg': "Invalid following id"
        });
    }

    res.status(200).json({
        "msg": "Unfollowed successfully"
    })
}

module.exports = {
    followController,
    unFollowController
}