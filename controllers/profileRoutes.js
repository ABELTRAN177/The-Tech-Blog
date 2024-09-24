const router = require('express').Router();
const { Posting } = require('../../models');
const { withGuard } = require('../../utils/auth');

router.get('/', withGuard, async (req, res) => {
    try {
        const postingData = await Posting.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const posts = postingData.map((post) => post.get({ plain: true }));

        res.render('profile', { posts, loggedIn: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new', withGuard, (req, res) => {
    res.render('newposting', { dashboard: true, loggedIn: req.session.logged_in });
});

router.get('/edit/:id', withGuard, async (req, res) => {
    try {
        const postingData = await Posting.findByPk(req.params.id);

        if (postingData) {
            const post = postingData.get({ plain: true });

            res.render('editposting', { post, dashboard: true, loggedIn: req.session.logged_in });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;