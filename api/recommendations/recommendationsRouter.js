const router = require('express').Router();
const { Recommendations } = require('../../data/helpers');

router.get('/', (req, res) => {
    Recommendations
        .find()
        .then(recommendations => res.status(200).json(recommendations))
        .catch(error => res.status(500).json({ error }));
});

module.exports = router;