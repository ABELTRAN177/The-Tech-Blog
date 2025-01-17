const router = require('express').Router();
const { Comment } = require('../../model/Comments');
const { apiGuard } = require('../../utils/authGuard');


router.post('/', apiGuard, async (req, res) => {
    try {
        const newComment = await Comment.create({ ...req.body, user_id: req.session.user_id });

        res.json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;