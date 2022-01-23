import { gql } from '@apollo/client';

export const QUERY_STATES = gql`
    {
        states {
            _id
            state_name
            fips_code
            resident_population
            incarcerated_population
            incarceration_rate
            geo_id
        }
    }
`;


export const QUERY_STATE = gql`   
    query state($state_name:String) {
        state(state_name:$state_name) {
            _id
            incarceration_rate
            resident_population
            state_name
            incarcerated_population
        }
    }
`;



export const QUERY_USER = gql`
    query user($_id: ID!) {
        user(_id: $_id) {
        _id
        email
        location {
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
}
`;

export const QUERY_LOCATION = gql`
    query location($state_name: String, $county_name: String) {
        location(state_name: $state_name, county_name: $county_name) {
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


export const QUERY_ME = gql`
    query me {
    me {
        _id
        location {
            _id
            state_name
            county_name
        }
    }
}
`;