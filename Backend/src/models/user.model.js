const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username must be provided"],
        unique: [true, "Username must be unique"]
    },
    email: {
        type: String,
        required: [true, "Email must be provided"],
        unique: [true, "Email must be unique"]
    },
    password: {
        type: String,
        required: [true, "Password must be provided"]
    },
    bio: {
        type: String,
    },
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/4fk4evlju/avatar-default-user-profile-icon-soci…"
    }
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;