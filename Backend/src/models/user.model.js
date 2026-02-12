const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "username": {
        type: String,
        unique: [true, "The username is already exists"],
        required: [true, "The username must be provided"]
    },
    "email" : {
        type : String,
        unique : [true, "The email is already exists"],
        required : [true, "The email must be provided"]
    },
    "password" : {
        type : String,
        required : [true, "The email must be provided"]
    },
    "bio" : String,
    "profileImage" : {
        type : String,
        default : "https://ik.imagekit.io/4fk4evlju/avatar-default-user-profile-icon-social-media-vector-57234208.webp"
    }
});

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;