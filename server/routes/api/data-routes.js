const router = require('express').Router();
const search = require('../../services/scraper');
const {
    createJailLocation,
} = require('../../controllers/jails-controller');

// import middleware
// const { authMiddleware } = require('../../utils/auth');

router.route('/').get(search); // On signing a petition, user gets created. 

// router.route('/jails').get(createJailLocation.findAll().post(createJailLocation.create()))
// router.route('/login').post(login); // On login

// router.route('/me').get(authMiddleware, getSingleUser); // On display user info


module.exports = router;