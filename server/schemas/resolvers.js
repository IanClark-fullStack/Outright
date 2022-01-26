const { AuthenticationError } = require('apollo-server-express');

const { User, Location, State, StateData, County, CountyData } = require('../models'); 
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
            //   user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('locations');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Alternatively pass in args to set location data 
        location: async (parent, { state_name, county_name }, context) => {
            const locations = {}; 
            if (state_name && county_name) {
                location.state_name = state_name;
                location.county_name = county_name;
            }
            return await Location.findById(context.user._id).populate(location);
        }, 

        counties: async (parent, { countyId, county_name }, context) => {
            const counties = {}; 
            if (countyId && county_name) {
                counties.countyId = countyId;
                counties.county_name = county_name;
            }
            return await County.find({ _id: countyId, county_name: county_name }).sort({ last_updated: -1 });
        }, 
        // countydata: async (parent, { county_name, state_name, last_update }, context) => {
        //     const counties = {}; 
        //     if (county_name && ) {
        //         counties.name = county_name;
        //     }
        //     return await CountyData.find({ county_name: county_name }).sort({ last_updated: -1 });
        // }, 

        // jail: async (parent, args, context) => {
        //     if (context.user) {
        //         return await User.findById(context.user._id).populate(args);
        //     }
        // }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        // updateUser: async (parent, args, context) => {
        //     if (context.user) {
        //         return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        //     }
        //     throw new AuthenticationError('No User');
        // },
        // addCounty: async (parent, { name }, context) => {
        //     const county = County.create({ name });
        //     return county;
        // },

        addCountyData: async (parent, args, context) => {
            // if (context.user) {
                const county = await CountyData.create({...args});
                await County.create(
                    { county_name: county.county_name },
                    { $addToSet: { county_data: county._id  }},
                    { new: true, runValidators: true, }
                );
                return county;
                

                //     
            // }
            // throw new AuthenticationError('No User');
        },
        

        addLocation: async (parent, args, context) => {
            if (context.user) {
                const location = new Location(args);
                return await User.findByIdAndUpdate(context.user._id, {  $set: { location } }, { new: true }); 
            }
        }, 
    }
}


module.exports = resolvers;