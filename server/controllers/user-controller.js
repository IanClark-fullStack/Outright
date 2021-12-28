// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    // {body} is destructured req.body
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });

        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

// save a signedPetition to a user's `signedPetitions` field by adding it to the set (to prevent duplicates)
// user comes from `req.user` created in the auth middleware function
    // async signPetition({ user, body }, res) {
    //     console.log(user);
    //     try {
    //         const updatedUser = await User.findOneAndUpdate(
    //             { _id: user._id },
    //             { $addToSet: { signedPetitions: body } },
    //             { new: true, runValidators: true }
    //         );
    //         return res.json(updatedUser);

    //     } catch (err) {
    //             console.log(err);
    //             return res.status(400).json(err);
    //         }
    // },
}