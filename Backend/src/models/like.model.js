const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "postId must be provided"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "postId must be provided"]
    },
}, {
    timestamps: true
});

likeSchema.index({ post: 1, user: 1 }, { unique: true });

const likeModel = mongoose.model("like", likeSchema);

module.exports = likeModel;