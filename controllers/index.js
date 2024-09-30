const Router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/');
const profileRoutes = require('./profileRoutes');

Router.use('/', homeRoutes);
Router.use('/api', apiRoutes);
Router.use('/profile', profileRoutes);

module.exports = Router;