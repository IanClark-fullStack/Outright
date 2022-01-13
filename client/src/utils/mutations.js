import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($_id: ID) {
        addUser(_id: $_id) {
        token
        
    }
}
`;


export const ADD_LOCATION = gql`
    mutation addLocation($userId: ID!, $state_name: String!, $county_name: String!) {
        addLocation(userId: $userId, state_name: $state_name, county_name: $county_name) {
            _id
            state {
                _id
                name
            }
            county {
                _id
                name
            }
        }
    }
`;

export const ADD_COUNTY_DATA = gql`
    mutation addCountyData($countyId: ID!, $county_name: String!) {
        addCountyData(countyId: $countyId, county_name: $county_name) {
            _id
            name 
            county_data {
                _id
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
    }
`;


// export const ADD_COUNTY = gql`
//     mutation addCounty($userId: ID!, $state_name: String!) {
//         addLocation(state_name: $state_name) {
//             _id
//             state {
//                 _id
//                 name
//             }
//         }
//     }
// `;


// export const ADD_STATE_DATA = gql`
//     mutation addStateData($stateId: ID!, $state_name: String!) {
//         addLocation(userId: $userId, state_name: $state_name) {
//             _id
//             state_data {
//                 _id
//                 flip_code, 
//                 last_update, 
//                 jail_population, 
//                 name, 
//                 state_name, place_type, title, resident_population, incarceration
//                 name
//             }
//         }
//     }
// `;
