const mongoose = require('mongoose');
const { Schema } = mongoose;

const State = require('./State');

const locationSchema = new Schema(
    {
        state: {
            type: Schema.Types.ObjectId, 
            ref: 'State',
            required: true,
        }, 
        // jail_data: {
        //     type: Schema.Types.ObjectId, 
        //     ref: 'Jail',
        //     required: true,
        // },
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // },
);



const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
