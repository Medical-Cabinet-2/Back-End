const router = require('express').Router();
const { Strains } = require('../../data/helpers');

router.get('/', (req, res) => {
    Strains
        .find()
        .then(strains => res.status(200).json(strains))
        .catch(error => res.status(500).json({ error }));
});

module.exports = router;