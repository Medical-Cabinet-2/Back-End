const router = require('express').Router();

const Users = require('../../data/helpers/users/usersModel');

router.get('/', (req, res) => {
    Users
        .getAll()
        .then(users => {
            res
                .status(200)
                .json(users);
        })
        .catch(error => {
            res
                .status(500)
                .json(error);
        });
});

module.exports = router;