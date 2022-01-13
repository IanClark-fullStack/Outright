const mongoose = require('mongoose');
const { Schema } = mongoose;

const County = require('./County');

const stateSchema = new Schema(
    {
        state_name: {
            type: String,
            required: true,
        }, 
        state_data: {
            type: Schema.Types.ObjectId, 
            ref: 'StateData',
            required: true,
        },
        counties: [
            {
                type: Schema.Types.ObjectId,
                ref: 'County'
            }
        ],
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // },
);



const State = mongoose.model('State', stateSchema);

module.exports = State;
