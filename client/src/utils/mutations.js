import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($_id: ID) {
        addUser(_id: $_id) {
        token
        user {
            _id
        }
    }
}
`;


export const ADD_LOCATION = gql`
    mutation addLocation($userId: ID!, $state_name: String!, $county_name: String!) {
        addLocation(userId: $userId, state_name: $state_name, county_name: $county_name) {
            _id
            state {
                _id
                state_name
            }
            county {
                _id
                county_name
            }
        }
    }
`;

export const ADD_COUNTY_DATA = gql`
    mutation addCountyData($state_name: String!, $county_name: String!, $last_update: String, $flip_code: Int, $jail_population: Int, $place_type: String, $title: String, $resident_population: Int, $incarceration: Float ) {

        addCountyData(state_name: $state_name, county_name: $county_name, last_update: $last_update, flip_code: $flip_code, jail_population: $jail_population, place_type: $place_type, title: $title, resident_population: $resident_population, incarceration: $incarceration) {
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
