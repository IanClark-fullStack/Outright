const mongoose = require('mongoose');

const { Schema } = mongoose;


// import Petition Schema
// const petitionSchema = require('./Petition');

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        }, 
        location: 
            {
                type: Schema.Types.ObjectId, 
                ref: 'Location',
                // required: true,
            },
        
    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);


const User = mongoose.model('User', userSchema);

module.exports = User;
