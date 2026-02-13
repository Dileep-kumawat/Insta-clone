const userModel = require("../models/user.model");
const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
    const { email, username, password, bio } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    if (isUserAlreadyExists) {
        return res.status(409).json({
            "msg": "The user already exists"
        });
    }

    const user = await userModel.create({
        username,
        email,
        password: await bcrypt.hash(password, 10),
        bio
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("jwt_token", token);

    res.status(201).json({
        "msg": "User created successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    });
}

const loginController = async (req, res) => {
    const { username, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    if (!user) {
        return res.status(404).json({
            "msg": "The user not found"
        });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        return res.status(401).json({
            "msg": "password invalid"
        });
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("jwt_token", token);

    res.status(200).json({
        "msg": "login successfull " + (user.email === email ? user.email : user.username),
    });
}

module.exports = {
    registerController,
    loginController
}