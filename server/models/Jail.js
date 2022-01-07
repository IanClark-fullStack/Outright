const { Schema, model } = require('mongoose');


const jailSchema = new Schema(
    {
        state_name: {
            type: String, 
            required: true,
        },
        last_updated: {
            type: Date, 
            default: Date.now
        }, 
        count: {
            type: Number,
            required: true,
        }, 
        jail_population: {
            type: Number, 
            required: true, 
            default: 0, 
        }, 
        resident_population: {
            type: Number, 
        }, 
        incarceration: {
            type: Number, 
        },
        county_name: {
            type: String, 
            required: false, 
        }
    }
);

const Jail = model('Jail', jailSchema);

module.exports = Jail;