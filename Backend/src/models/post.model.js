const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption : {
        type : String,
        default : ""
    },
    imgUrl : {
        type : String,
        require : [true, "The caption must be provided"]
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        require : [true, "The user Id must be provided"]
    }
});

const postModel = mongoose.model("post",postSchema);

module.exports = postModel;