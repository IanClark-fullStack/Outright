import { useQuery } from '@apollo/client';
import { QUERY_STATE } from '../utils/queries';
import React, { useState, useEffect } from 'react';
import { AnimateKeyframes }  from 'react-simple-animate';
import Heading from '../components/Heading';
import { determineFontWeight } from '../utils/helpers';
import Local from '../utils/Local';
import { Typography } from '@mui/material';
export default function FontDisplay({ userCoords, userStates }) {
    // Activate and Deactivate child component animations by lifting state from parent component
        // Pass state to child components 
    const [newFontWeight, setNewFontWeight] = useState({
        default: 500,
        loadingWeight: true,
    }); 
    // const [localData, setNewFontWeight] = useState({}); 

    const { loading, data } = useQuery(QUERY_STATE, {
        variables: { state_name: userCoords.stateLocation },
    });

    const handleChange = () => {
        setNewFontWeight({ loadingWeight: false });
    }
    
    const userState = data?.state || {};
    console.log(userState); 
    const weight = Number(userState.incarceration_rate)
    console.log(weight);

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

    const animateClass = {}
    // const styles = {
    //     shiftWeight : {
    //         fontVariationSettings: 'wght 500',
    //         animation: 'bold-to-light 2000ms linear 0.3s forwards',
    //     },
    //     // 'shiftWeight > h2': {
    //     //     animation: 'bold-to-light 2000ms linear 0.3s forwards',
    //     // },
    //     '@keyframes bold-to-light': {
    //         '60%': {
    //             fontVariationSettings: 'wght 400',
    //         },
    //         '100%': {
    //             fontVariationSettings: `wght ${weight}`,
    //         }
    //     } 
    // };
  
   
    
   let total = 0; 
    // useEffect(() => {
    //     let weight = 0; 
    //     async function changeFont() {
    //         // let response = await getRelevantData(userCoords.countyLocation, userCoords.stateLocation);
    //         // let getFontWeight = await determineFontWeight(userState, userStates);
    //         // console.log(getFontWeight)
    //         weight = Number(userState.incarceration_rate)
    //         setNewFontWeight({default: Number(userState.incarceration_rate)})
    //         // console.log(response)
    //         // setCountyData({loading: false,  ...response.county  });
    //         // setStateData([...response.stateCounties]);
            
    //         return weight
    //     }
        
    //     changeFont();
    // }, [userState.incarceration_rate]);
    // console.log(newFontWeight)
    

   
        // setNewFontWeight({
        // loading: false, 
        // fontWeight: fontRate,
        // twenty: percentOne,
        // sixty: percentTwo
        // })
    
    
    // console.log(newFontWeight)

    
    

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
                    <Heading userState={userState} />
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
                
                </div>
    
           
                
            </div> )}
        </>
       
    )
}
