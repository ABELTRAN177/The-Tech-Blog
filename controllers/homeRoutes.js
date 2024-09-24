const router = require('express').Router();
const { Posting, Comments, User  } = require('../../models');
const { apiGuard, withoutGuard } = require('../../utils/auth');


router.get('/', withoutGuard, async (req, res) => {
    try {
        const postingData = await Posting.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
});

const posts = postingData.map((post) => post.get({ plain: true }));    

res.render('homepage', {posts, loggedIn: req.session.logged_in});
} catch (err) {
    res.status(500).json(err);
}
});

router.get('/posting/:id', withoutGuard, async (req, res) => {
    try {
        const postingData = await Posting.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

       if (postingData) { 
        const post = postingData.get({ plain: true });

        res.render('posting', { post, loggedIn: req.session.logged_in });
    } else {
        res.status(404).end();
    }
} catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', withoutGuard, (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', withoutGuard, (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;