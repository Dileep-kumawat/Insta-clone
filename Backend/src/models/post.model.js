const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    imgUrl: {
        type: String,
        required: [true, "Image url must be provided"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "user must be provided"]
    }
}, {
    timestamps: true
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;