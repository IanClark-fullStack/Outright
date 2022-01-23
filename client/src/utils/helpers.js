
export const determineFontWeight = async (userState, arrayOfStates) => {
 
    try {
        let output = 0; 
        let i = 0;
        let foundUserData = undefined;    
        if (!userState.loading && arrayOfStates) {
            while (i < arrayOfStates.length && foundUserData === undefined) {
                let currState = arrayOfStates[i];
                if (userState.stateLocation === currState.state_name) {
                    // console.log('found user state')
                    foundUserData = currState
                    
                    
                } 
                
                i++
            }

        }
        console.log(foundUserData)
        return Number(foundUserData.incarceration_rate);
        
        

        // }
        
        
        // console.log(output)
    } catch (err) {
        console.log(err)
    }
}