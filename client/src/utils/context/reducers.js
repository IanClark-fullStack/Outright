import { CHANGE, SUBMIT } from './actions';

// Name has to be letters numbers and be between 6 and 15 characters
const nameRegex = /^[a-z0-9_-]{6,15}$/;
// Exporting a function as a reducer with a state and action parameters 
export const reducer = (state, action) => {
  // If the type of action is a CHANGE? 
    switch (action.type) {
        case CHANGE:
        return {
            // Returm a name property that is equal to the value 
            name: action.value,
            // And save either true or false to the isValid property
            isValid: action.value.match(nameRegex) ? true : false,
        };
      // If the action type is a submit, 
    case SUBMIT:
      return {
        // Return all the properties and their values in the state argument 
        ...state,
      };
      // In all other cases return the state argument as is? 
    default:
      return state;
  }
};
