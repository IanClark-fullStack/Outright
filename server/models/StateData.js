const mongoose = require('mongoose');
const { Schema } = mongoose;


const stateDataSchema = new Schema(
    {
        last_update: {
            type: String
        },
        // Totals for Counties within State
        jail_population: {
            type: Number, 
        },
        resident_population: {
            type: Number,
        }, 
        incarceration: {
            type: Number, 
        },
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // },
);



const StateData = mongoose.model('StateData', stateDataSchema);

module.exports = StateData;