const mongoose = require('mongoose');
const { Schema } = mongoose;

const CountyData = require('./CountyData');

const countySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        }, 
        county_data: [
            {
            type: Schema.Types.ObjectId,
            ref: 'CountyData'
            }
        ],
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // },
);



const County = mongoose.model('County', countySchema);

module.exports = County;
