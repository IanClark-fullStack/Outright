const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        email: String
        location: Location
    }
    
    type Location {
        _id: ID! 
        state: State
    }

    type State {
        _id: ID! 
        name: String
        counties: [County]
        state_data: StateData
    }

    type StateData {
        _id: ID! 
        last_updated: String
        jail_population: Int 
        resident_population: Int
        incarceration: Int
    }
    type County {
        _id: ID! 
        name: String
        county_data: [CountyData]
    }
    type CountyData {
        _id: ID! 
        flip_code: String
        last_updated: String
        jail_population: Int 
        name: String,
        title: String,
        resident_population: Int
        incarceration: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        location(_id: ID!, state_name: String): Location
        state(state_name: String): [County]
        county(name: String) : County
        

        
        # jail(_id: ID!, state_name: String!): Jail
    }

    type Mutation {
        addUser(_id: ID!, email: String): Auth 
        updateUser(_id: ID!, location: String): User
        addLocation(_id: ID!, state_name: String!): User
        addCountyData(state_name: String): [CountyData]
        # addJailData(_id: ID!, state_name: String!): Jail
    }

`;

module.exports = typeDefs; 