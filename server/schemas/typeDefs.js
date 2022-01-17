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
        county: County
    }

    type State {
        _id: ID! 
        state_name: String
        counties: [County]
        state_data: StateData
    }

    type StateData {
        _id: ID!, 
        flip_code: Int,
        last_update: String, 
        jail_population: Int, 
        county_name: String, 
        state_name: String, 
        place_type: String, 
        title: String, 
        resident_population: Int, 
        incarceration: Int,
    }

    type County {
        _id: ID 
        county_name: String
        county_data: [CountyData]
    }
    type CountyData {
        _id: ID! 
        flip_code: Int,
        last_update: String, 
        jail_population: Int, 
        county_name: String, 
        state_name: String, 
        place_type: String, 
        title: String, 
        resident_population: Int, 
        incarceration: Float,
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        location(state_name: String, county_name: String): Location
        counties(_id: ID, county_name: String): [County]!
        state(state_name: String): State
        county(county_name: String) : County 
        countydata(county_name: String, state_name: String, last_update: String) : [County] 
        me: User
        
        # jail(_id: ID!, state_name: String!): Jail
    }

    type Mutation {
        addUser(_id: ID): Auth 
        # updateUser(_id: ID!, location: String): User
        addLocation(userId: ID!, state_name: String!, county_name: String!): User
        addCountyData(state_name: String, county_name: String, last_update: String, flip_code: Int, jail_population: Int, place_type: String, title: String, resident_population: Int, incarceration: Float): CountyData
        # addStateData(state_name: String!, jail_population: Int)  
        
    }

`;

module.exports = typeDefs; 