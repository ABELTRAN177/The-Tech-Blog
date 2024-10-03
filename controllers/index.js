const Router = require('express').Router();

const homeRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api/');
const profileRoutes = require('./profileRoutes');
const dashboardRoutes = require('./dashboardRoutes'); 

Router.use('/', homeRoutes);
Router.use('/api', apiRoutes);
Router.use('/profile', profileRoutes);
Router.use('/dashboard', dashboardRoutes);

module.exports = Router;