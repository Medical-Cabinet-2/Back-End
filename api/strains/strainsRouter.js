const router = require('express').Router();
const { Strains } = require('../../data/helpers');

// GET strains
router.get('/', (req, res) => {
    Strains
        .find()
        .then(strains => res.status(200).json(strains))
        .catch(error => res.status(500).json(error.message));
});

// POST Add strains
router.post('/', (req, res) => {
    Strains
        .add(req.body)
        .then(strain => {
            res.status(201).json(strain);
        })
        .catch(error => {
            // log error to server
            console.log(error);
            res.status(500).json({
                message: 'Error adding the strain', error
            });
        });
});

module.exports = router;