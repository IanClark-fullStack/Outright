const { AuthenticationError } = require('apollo-server-express');

const { User, Jail, CountyData } = require('../models'); 
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'location',
                    populate: 'jail_data'
                });
            //   user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        // Alternatively pass in args to set location data 
        location: async (parent, { state_name }, context) => {
            const location = {}; 
            if (state_name) {
                location.state_name = state_name;
            }
            return await Location.findById(context.user._id).populate(location);
        }, 
        // jail: async (parent, args, context) => {
        //     if (context.user) {
        //         return await User.findById(context.user._id).populate(args);
        //     }
        // }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = await signToken(user);
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('No User');
        },
        addCountyData: async (parent, args, context) => {
            // if (context.user) {
                return await CountyData.create(args);
            
            // throw new AuthenticationError('No User');
        },
        addLocation: async (parent, args, context) => {
            if (context.user) {
                const location = new Location(args);
                return await User.findByIdAndUpdate(context.user._id, {  $set: { location } }, { new: true }); 
            }
        }, 
        // addJailData: async (parent, args, context) => {
        //     if (context.user) {
        //         const jailData = new Jail(args);
        //         return await User.findByIdAndUpdate(context.user._id, {  $set: { ...jailData } }, { new: true }); 
        //     }
        // }
    }
}


module.exports = resolvers;