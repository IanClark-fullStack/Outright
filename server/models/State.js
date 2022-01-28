const mongoose = require('mongoose');
const { Schema } = mongoose;

const stateSchema = new Schema(
    {
        state_name: {
            type: String,
            // required: true,
        }, 
        fips_code: {
            type: String, 
        },

        resident_population: {
            type: Number,
        },
        incarcerated_population: {
            type: Number,
        },
        geo_id: {
            type: String, 
        },
        incarceration_rate: {
            type: String, 
            // required: true, 
        }
        // state_data: {
        //     type: Schema.Types.ObjectId, 
        //     ref: 'StateData',
        //     required: true,
        // },
        // counties: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'County'
        //     }
        // ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);



const State = mongoose.model('State', stateSchema);

module.exports = State;
