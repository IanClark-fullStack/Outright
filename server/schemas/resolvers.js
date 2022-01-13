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
                counties.name = county_name;
            }
            return await County.find({ _id: countyId, name: county_name }).sort({ last_updated: -1 });
        }, 
        countydata: async (parent, { county_name }, context) => {
            const counties = {}; 
            if (county_name) {
                counties.name = county_name;
            }
            return await CountyData.find({ county_name: county_name }).sort({ last_updated: -1 });
        }, 

        // jail: async (parent, args, context) => {
        //     if (context.user) {
        //         return await User.findById(context.user._id).populate(args);
        //     }
        // }
    },
    Mutation: {
        addUser: async (parent, { _id }) => {
            const user = await User.create({ _id });
            const token = signToken(user);
            return { token, user };
        },

        // updateUser: async (parent, args, context) => {
        //     if (context.user) {
        //         return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        //     }
        //     throw new AuthenticationError('No User');
        // },

        addCountyData: async (parent, { countyId, county_name }, context) => {
            if (context.user) {
                return County.findByIdAndUpdate(
                    { _id: countyId, name: county_name  },
                    { 
                        $addToSet: {
                            county_data: {
                                flip_code,
                                last_update,
                                jail_population,
                                county_name, 
                                state_name, 
                                place_type, 
                                title,
                                resident_population,
                                incarceration,
                            }
                        }
                    },
                    {
                        new: true, 
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('No User');
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