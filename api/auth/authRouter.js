const bcrypt = require('bcryptjs');
const express = require('express');

const { Users } = require('../../data/helpers');
const signToken = require('../middleware');

const router = express.Router();

router.post('/register', (req, res) => {
    const userInfo = req.body;

    // hash the password
    const hash = bcrypt.hashSync(userInfo.password, 14);

    // override the plain text password with the hash
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
    let { email, password } = req.body;

    Users
        .findBy({ email })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
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

module.exports = router;
