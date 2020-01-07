const bcrypt = require('bcryptjs');
const express = require('express');

const { Users } = require('../../data/helpers');
const { signToken } = require('../middleware');

const router = express.Router();

router.post('/register', (req, res) => {
    const userAccount = req.body;

    // hash the password
    const hash = bcrypt.hashSync(userAccount.password, 14);

    // override the plain text password with the hash
    userAccount.password = hash;

    Users
        .add(userAccount)
        .then(user => {
            delete user.password;
            const token = signToken(user);
            const credentials = {
                user,
                token
            }
            res.status(201).json(credentials);
        })
        .catch(error => res.status(500).json(error.message));
});

router.post('/login', (req, res) => {
    let { email, password } = req.body;

    Users
        .findBy({ email })
        .first()
        .then(user => {
            // check that passwords match
            if (user && bcrypt.compareSync(password, user.password)) {
                delete user.password;
                const token = signToken(user);
                const credentials = {
                    user,
                    token
                }
                res.status(200).json({ message: `Welcome ${user.first_name}!`, credentials });
            } else {
                // return 401 if the password and username are invalid
                res.status(401).json({ message: "Username or password is invalid" });
            }
        })
        .catch(error => res.status(500).json(error.message));
})

module.exports = router;
