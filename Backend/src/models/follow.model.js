const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "follower id must be provided"]
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "following id must be provided"]
    }
}, {
    timestamps: true
});

const followModel = mongoose.model("follow", followSchema);

module.exports = followModel;