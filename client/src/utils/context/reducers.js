// Import our actions from our actions file
import {
    UPDATE_WEIGHT,
    ADD_WEIGHT,
} from './actions';

// Create a function that will handle combining two objects. Accepts state and an action as an argument.
export default function reducer(state, action) {
    // Depending on the action we create a new version of state after the desired action is preformed
    switch (action.type) {
        case ADD_WEIGHT: {

            
            // Grab the last student's id from the array of students and add one to it.
            const newWeightValue = state.pageTitles[state.pageTitles.length - 1].id;
            console.log(newWeightValue);
            // Take a copy of the new student's data and add an id to it
            const newWeight = { ...action.payload, weight: newWeightValue };

            // Take a copy of state and assign the students array to our updated array with the new student
            return {
                ...state,
                pageTitles: [...state.pageTitles, newWeight],
            };
        }

         // Take a copy of existing state and modify the `majors` array such that the one in the payload gets added
        // case ADD_WEIGHT: {
        //     return {
        //     ...state,
        //     pageTitles: [...state.pageTitles, action.payload],
        //     };
        // }
          // Take a copy of state and return it with a modified version of the students array excluding the `student.id` in `action.payload`
        case UPDATE_WEIGHT: {
            // Find the index of the student who has an id that matches the one in the payload
            const titleIndex = state.pageTitles.findIndex(
                (title) => title.id === action.payload.id
            );

            // Variable to hold our student object with the updated values from our action
            const updatedTitle = {
                ...state.pageTitles[titleIndex],
                ...action.payload,
            };

            // Make a copy of our current students array
            const newTitlesList = [...state.pageTitles];

            // Assign the updated student to their existing position in the newStudentsList
            newTitlesList[titleIndex] = updatedTitle;

            // Return a copy of state with our new student list
            return {
                ...state,
                pageTitles: newTitlesList,
            };
        }
    // Default to returning the state as is in our switch statement
    default:
        return state;
    }
}