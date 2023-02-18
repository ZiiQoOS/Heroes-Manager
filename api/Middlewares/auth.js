const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = req.body.token || req.query.token || authHeader?.substr("Bearer".length + 1);
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.ACCESS_TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;