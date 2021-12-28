const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const jailRoutes = require('./jail-routes.js');

router.use('/users', userRoutes);
router.use('/jails', jailRoutes);

module.exports = router;
