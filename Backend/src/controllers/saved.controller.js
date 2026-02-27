const postModel = require("../models/post.model");
const savedModel = require("../models/saved.model");

async function saveController(req, res) {
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

    const isAlreadysaved = await savedModel.findOne({ post, user });

    if (isAlreadysaved) {
        return res.status(409).json({
            "msg": "You can't save post again"
        });
    }

    const saveRecord = await savedModel.create({
        post,
        user
    });

    res.status(201).json({
        "msg": "Post is saved successfully",
        saveRecord
    });
}

async function unSaveController(req, res) {
    const post = req.params.id;
    const user = req.user.id;

    let unSaveRecord = null;
    try {
        unSaveRecord = await savedModel.findOneAndDelete({ post, user });
    } catch (error) {
        return res.status(400).json({
            "msg": "Something went wrong"
        });
    }

    res.status(200).json({
        "msg": "The post is unsaved successfully",
        unSaveRecord
    });
}

module.exports = {
    saveController,
    unSaveController
}