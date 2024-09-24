const withGuard = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

const apiGuard = (req, res, next) => {
    if (!req.session.logged_in) {
        res.status(401).json({ message: 'Please log in' });
    } else {
        next();
    }
}

const withoutGuard = (req, res, next) => {
    if (req.session.logged_in) {
        res.redirect('/');
    } else {
        next();
    }
};

module.exports = { withGuard, apiGuard, withoutGuard };