const mongoose = require("mongoose");

const status = ['pending', 'rejected', 'accepted'];

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
    },
    status: {
        type: String,
        enum: {
            values: status,
            message: "[VALUE] must be in either pending or rejected or accepted"
        },
        required: true,
        default: "pending"
    }
}, {
    timestamps: true
});

followSchema.index({ follower: 1, following: 1 }, { unique: true });

const followModel = mongoose.model("follow", followSchema);

module.exports = followModel;