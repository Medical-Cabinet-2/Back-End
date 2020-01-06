const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express')

const router = express.Router();

router.post('/register', (req, res) => {
    const userInfo = req.body;
    const hash = bcrypt.hashSync(userInfo.password, 12);
    userInfo.password = hash;

    Users
        .add(userInfo)
        .then(user => {
            delete user.password;
            const token = signToken(user);
            const response = {
                user,
                token
            }
            res.status(201).json(response);
        })
        .catch(error => res.status(500).json(error));
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    Users
        .findBy({ email })
        .first()
        .then(user => {
            if (user && bcrypt.compareSynce(password, user.password)) {
                delete user.password;
                const token = signToken(user);
                const response = {
                    user,
                    token
                }
                res.status(200).json(response);
            } else {
                res.status(404).json({ message: "Username or password is invalid." });
            }
        })
        .catch(error => res.status(500).json(error));
})


function signToken(user) {
    const payload = {
        id: user.id
    }

    const secret = process.env.JWT_SECRET || 'It is secret, it is safe.';

    const options = { expiresIn: '1d' };

    return jwt.sign(payload, secret, options);
}

module.exports = router;
