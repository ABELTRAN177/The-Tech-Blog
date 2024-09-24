const router = require('express').Router();
const { Posting } = require('../../models');
const { apiGuard } = require('../../utils/auth');

router.post('/', apiGuard, async (req, res) => {
    const body = req.body;

    try {
        const newPosting = await Posting.create({ ...body, user_id: req.session.user_id });
        res.json(newPosting);
    } catch (err) {
        res.status(200).json(newPosting);
    }
});

router.put('/:id', apiGuard, async (req, res) => {
    try {
        const updatedPosting = await Posting.update(body, {
            where: {
                id: req.params.id,
            },
        });

        if (!updatedPosting) {
            res.status(404).json({ message: 'No posting found with this id!' });
            return;
        }

        res.json(updatedPosting);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', apiGuard, async (req, res) => {
    try {
        const deletedPosting = await Posting.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!deletedPosting) {
            res.status(404).json({ message: 'No posting found with this id!' });
            return;
        }

        res.json(deletedPosting);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;