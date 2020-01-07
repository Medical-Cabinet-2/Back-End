const jwt = require('jsonwebtoken');
const secret = require('./secret');

module.exports = (user) => {

    const payload = {
        id: user.id
    };

    const options = {
        expiresIn: '1d',
    };

    return jwt.sign(payload, secret, options);
}
