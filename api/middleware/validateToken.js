const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    const secret = process.env.JWT_SECRET;

    if (!authorization) {
        return res
            .status(400)
            .json({ message: "No authorization header attached" });
    } else {

        jwt.verify(authorization, secret, (error, decodedToken) => {
            if (error) {
                res
                    .status(401)
                    .json({ message: "Invalid token" });
            } else {
                req.token = decodedToken;
                next();
            }
        });

    };

};