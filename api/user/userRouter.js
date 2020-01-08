const router = require('express').Router();

const { Users, Recommendations } = require('../../data/helpers');

// GET users
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
                .json(error.message);
        });
});

// PUT Update user by ID
router.put('/:id', (req, res) => {
    Users
        .update(req.params.id, req.body)
        .then(user => {
            if (user) {
                res.status(200).json({ message: 'User has been updated', user });
            } else {
                res.status(404).json({ message: 'The user could not be found', user });
            }
        })
        .catch(error => {
            // log error to server
            console.log(error);
            res.status(500).json({
                message: 'Error updating the user', error
            });
        });
});

// DELETE user by ID
router.delete('/:id', (req, res) => {
    Users
        .remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'The user has been deleted' });
            } else {
                res.status(404).json({ message: 'The user could not be found' });
            }
        })
        .catch(error => {
            // log error to server
            console.log(error);
            res.status(500).json({
                message: 'Error removing the user', error
            });
        });
});

// GET user recommendations
router.get('/:id/recommendations', (req, res) => {
    Recommendations
        .findByUserId(req.params.id)
        .then(recommendations => {
            if (recommendations.length) {
                res.status(200).json(recommendations)
            } else {
                res.status(404).json({ message: 'No recommendations found' });
            }
        })
        .catch(error => res.status(500).json({ message: 'Error getting the recommendations for the user', error }));
});

// POST user recommendations
router.post('/:id/recommendations', (req, res) => {
    const recommendation = { user_id: parseInt(req.params.id), ...req.body }

    Recommendations
        .add(recommendation)
        .then(recommendation => {
            res.status(201).json(recommendation);
        })
        .catch(error => {
            // log error to server
            console.log(error);
            res.status(500).json({
                message: 'Error adding the recommendation', error
            });
        });
});

// DELETE user recommendation by ID
router.delete('/:user_id/recommendations/:strain_id', (req, res) => {
    Recommendations
        .remove(req.params.user_id, req.params.strain_id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'Recommendation removed' });
            } else {
                res.status(404).json({ message: 'Recommendation could not be found' });
            }
        })
        .catch(error => {
            // log error to server
            console.log(error);
            res.status(500).json({
                message: 'Error removing the recommendation', error
            });
        });
});

module.exports = router;