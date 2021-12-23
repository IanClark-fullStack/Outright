const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import Petition Schema
// const petitionSchema = require('./Petition');

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true, 
            unique: true, 
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        }, 
        password: {
            type: String, 
            required: true,
        },
        // User has signed petition(s)
        // signedPetitions: [petitionSchema],
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // },
);

// Hash the users password 
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRoundss = 10; 
        this.password = await bcrypt.hash(this.password, saltRoundss);
    }
    next();
});

// Attach a method for password comparasion and validation 
userSchema.method.isTruePassword = async function (password) {
    return bcrypt.compare(password, this.password); 
};

// when we query a user, we'll also get another field called `petitionCount` with the number of signedPetitions we have
// userSchema.virtual('petitionCount').get(function () {
//     return this.signedPetitions.length;
// });


const User = model('User', userSchema);

module.exports = User;
