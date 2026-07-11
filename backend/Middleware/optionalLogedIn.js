const jwt = require("jsonwebtoken");

const optionalLogin = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return next();
    }

    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded;
    } catch (err) {
        console.log("Invalid Token");
    }

    next();
};

module.exports = optionalLogin;