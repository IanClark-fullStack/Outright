const router = require('express').Router();
const axios = require('axios');

const {
    createJailLocation,
} = require('../../controllers/jails-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/').get(createJailLocation); // On signing a petition, user gets created. 

// router.route('/login').post(login); // On login

// router.route('/me').get(authMiddleware, getSingleUser); // On display user info


module.exports = router;