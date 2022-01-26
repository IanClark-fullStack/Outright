import { useQuery } from '@apollo/client';
import { QUERY_STATE } from '../utils/queries';
import React, { useState } from 'react';
import { AnimateKeyframes }  from 'react-simple-animate';
import Heading from '../components/Heading';
import { determineFontWeight } from '../utils/helpers';
import Local from '../utils/Local';
import { FontProvider } from '../utils/context/FontContext';

export default function FontDisplay({ userCoords, userStates, pageNum }) {
    // Activate and Deactivate child component animations by lifting state from parent component
        // Pass state to child components 
    // const [newFontWeight, setNewFontWeight] = useState({
    //     default: 500,
    //     loadingWeight: true,
    // }); 
    // const [localData, setNewFontWeight] = useState({}); 

    const { loading, data } = useQuery(QUERY_STATE, {
        variables: { state_name: userCoords.stateLocation },
    });

    // const handleChange = () => {
    //     setNewFontWeight({ loadingWeight: false });
    // }
    
    const userState = data?.state || {};
    const weight = Number(userState.incarceration_rate)

    const handleDataChange = async () => {
        try {
            if (userState) {
                Local.writeInData(userState);
            }
            
        } catch (err) {
            console.log(err);
        }
    }

    handleDataChange()

    
    
    

    // const handleCountyChange = async () => {
    //     try {
    //         const { data } = await addCountyData({
                
    //             variables: { 
    //                 state_name: countyData.state_name,
    //                 county_name: countyData.county_name,
    //                 last_update: countyData.last_update,
    //                 flip_code: countyData.flip_code,
    //                 jail_population: countyData.jail_population,
    //                 place_type: countyData.place_type,
    //                 title: countyData.title, 
    //                 resident_population: countyData.resident_population,
    //                 incarceration: countyData.incarceration
    //             }
    //         })
    //         console.log(data)
    //     } catch (err) {
    //         console.log(err);
    //     }
        
    // }
    return (
        <>
        
            {!userState ? ( <div>Loading...</div> ) 

            : (  <div>

                <div>
                <FontProvider>
                    <Heading userState={userState} pageNum/>
                {/* <h2 style={styles.shiftWeight}>Outright</h2> */}
                    <AnimateKeyframes
                    play
                    delay={8}
                    duration={4}
                    fillMode="forwards"
                    keyframes={[
                        `font-variation-settings: 'wght' 200`,
                        `font-variation-settings: 'wght' 100` 
                    ]}>
                        <>
                        {/* <h2 style={styles.keyframes}>Outright v1</h2> */}
                        </>
                    </AnimateKeyframes>
                </FontProvider>
                
                </div>
    
           
                
            </div> )}
        </>
       
    )
}
