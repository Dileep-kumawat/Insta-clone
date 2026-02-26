const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerController(req, res) {
    const { username, email, password, bio } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            {
                username
            }, {
                email
            }
        ]
    });

    if (isUserAlreadyExist) {
        return res.status(409).json({
            msg: "User already exists, please try to login"
        });
    }

    let user = null;
    try {
        user = await userModel.create({
            username,
            email,
            password: await bcrypt.hash(password, 10),
            bio
        });
    } catch (err) {
        console.log(err + " Problem in register controller at creating an user");
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        "msg": "User created successfully",
        user
    });
}

async function loginController(req, res) {
    const { username, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    }).select('+password');

    if (!user) {
        return res.status(404).json({
            "msg": "user not found, check your credentials"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            "msg": "Wrong credentials"
        });
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        "msg": "User login successfull - " + (user.email === email ? user.email : user.username),
        user
    });
}

async function getMeController(req, res) {
    const user = await userModel.findById(req.user.id);

    res.status(200).json({
        "msg": "The details of the user",
        user: {
            username: user.username,
            email: user.email,
            profileImage: user.profileImage,
            bio: user.bio
        }
    })
}

module.exports = {
    registerController,
    loginController,
    getMeController
}