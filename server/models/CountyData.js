const mongoose = require('mongoose');
const { Schema } = mongoose;

// const State = require('./County');

const countyDataSchema = new Schema(
    {
        flip_code: {
            type: Number,
            
        }, 
        last_update: {
            type: String
        },
        jail_population: {
            type: Number, 
        },
        county_name: {
            type: String,
        }, 
        state_name: {
            type: String, 
        },
        place_type: {
            type: String, 
        }, 
        title: {
            type: String, 
        }, 
        resident_population: {
            type: Number,
        }, 
        incarceration: {
            type: Number, 
        },
        // state: { 
        //     type: Schema.Types.ObjectId, 
        //     ref: 'State',
        //     required: true,
        // },
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // },
);



const CountyData = mongoose.model('CountyData', countyDataSchema);

module.exports = CountyData;