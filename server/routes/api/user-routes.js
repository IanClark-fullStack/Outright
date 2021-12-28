const router = require('express').Router();
// const {
//     createUser,
//     getSingleUser,
//     signPetition,
//     login,
// } = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
// router.route('/').post(createUser).put(authMiddleware, signPetition); // On signing a petition, user gets created. 

// router.route('/login').post(login); // On login

// router.route('/me').get(authMiddleware, getSingleUser); // On display user info


module.exports = router;
