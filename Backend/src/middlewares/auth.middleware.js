const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(404).json({
            "msg": "Token not found"
        });
    }

    let decoded = null;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).json({
            "msg": "Wrong token, unauthorized."
        });
    }

    req.user = decoded;

    next();
}

module.exports = authMiddleware;