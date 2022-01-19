export const determineFontWeight = async (userStateObject, arrayOfStates) => {
    let output = 200; 
    let i = 0; 
    let foundUserData = undefined;    
    const userState = userStateObject; 
    if (arrayOfStates.length) {
        
    }
    while (i < arrayOfStates.length && foundUserData === undefined) {
        let currState = arrayOfStates[i]; 
        // let currentRank = arrayOfStates[i].rank; 
       
        // console.log(output)
        if (currState.state_name === userState) {
            foundUserData = currState; 
        } else {
            output += 14; 
        }
        
        i++
    }
    console.log(output)
    return output
    

}