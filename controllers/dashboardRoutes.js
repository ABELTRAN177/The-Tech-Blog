const router = require('express').Router();
const Posting = require('../model/Posts');
const Comments = require('../model/Comments');
const User = require('../model/Users');
const { withGuard, withoutGuard } = require('../utils/authGuard');


router.get('/', async (req, res) => {
    try {
        const postingData = await Posting.findAll({
            include: [User],
});

const posts = postingData.map((post) => post.get({ plain: true }));    

res.render('home', {posts, loggedIn: req.session.logged_in});
} catch (err) {
    res.status(500).json(err);
}
});

router.get('/posting/:id', withoutGuard, async (req, res) => {
    try {
        const postingData = await Posting.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comments,
                    include: ['User'],
                },
            ],
        });

       if (postingData) { 
        const post = postingData.get({ plain: true });

        res.render('posting', { posting, loggedIn: req.session.logged_in });
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