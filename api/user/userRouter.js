const router = require('express').Router();

const { Users, Recommendations, Strains } = require('../../data/helpers');

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
router.get('/:id/recommendation', (req, res) => {
    Recommendations
        .findByUserId(req.params.id)
        .then(recommendation => {
            if (recommendation.length) {
                res.status(200).json(recommendation)
            } else {
                res.status(404).json({ message: 'No recommendation found' });
            }
        })
        .catch(error => res.status(500).json({ message: 'Error getting the recommendation for the user', error }));
});

// POST user recommendations
router.post('/:id/recommendation', (req, res) => {
    const recommendations = { user_id: parseInt(req.params.id), ...req.body }
    return Recommendations
        .add(recommendations)
        .then(async () => {
            const strain = await Strains.findBy({ id: recommendations.strain_id }).first()
            res.status(201).json({ message: `${strain.strain} added`, recommendations });
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
router.delete('/:user_id/recommendation/:strain_id', (req, res) => {
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