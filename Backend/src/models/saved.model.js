const mongoose = require("mongoose");

const savedSchema = mongoose.Schema({
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

savedSchema.index({ post: 1, user: 1 }, { unique: true });

const savedModel = mongoose.model("save", savedSchema);

module.exports = savedModel;