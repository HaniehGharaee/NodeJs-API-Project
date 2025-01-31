const jwt = require("jsonwebtoken")

const verifyToken = (token) => {
    return jwt.verify(token, 'anykey', (err, decoded) => {
        if (err) {
            return {
                msg: "Invalid token"
            };
        } else {
            return decoded;
        }
    })
};

module.exports = verifyToken