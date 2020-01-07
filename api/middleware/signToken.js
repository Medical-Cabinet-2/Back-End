const jwt = require('jsonwebtoken');

module.exports = (user) => {

    const payload = {
        id: user.id
    };

    const secret = process.env.JWT_SECRET || "It is secret";

    const options = {
        expiresIn: '1d',
    };

    return jwt.sign(payload, secret, options);
}
