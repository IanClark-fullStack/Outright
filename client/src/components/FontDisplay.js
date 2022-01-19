import { useQuery } from '@apollo/client';
import { QUERY_STATES } from '../utils/queries';
import React, { useState, useEffect } from 'react';
import { AnimateKeyframes }  from 'react-simple-animate';
import { determineFontWeight } from '../utils/helpers';

export default function FontDisplay(props) {
    const [newFontWeight, setNewFontWeight] = useState(200); 


    console.log(newFontWeight)

    useEffect(() => {
        async function changeFont() {
            // let response = await getRelevantData(userCoords.countyLocation, userCoords.stateLocation);
            let getFontWeight = await determineFontWeight(props.userCoords.stateLocation, props.states);
            console.log(getFontWeight)
            setNewFontWeight(getFontWeight)
            // console.log(response)
            // setCountyData({loading: false,  ...response.county  });
            // setStateData([...response.stateCounties]);
            
            return newFontWeight
        }
        
        changeFont();
    }, [props, newFontWeight]);
    console.log(newFontWeight)
 
        
    const injectAnimation = `
        font-variation-settings: 'wght' 500;
        animation: shiftWeight 2000ms linear 0.3s forwards;
    
    @keyframes shiftWeight {
                60% {
                font-variation-settings: 'wght' 400;
                }
                100% {
                    font-variation-settings: 'wght' ${newFontWeight};
                }
            }`
        
    
    // console.log(stateData)

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
        <div>
            <AnimateKeyframes
                play
                delay={2}
                duration={3}
                fillMode="forwards"
                keyframes={[
                    { 20: `font-variation-settings: 'wght' ${Math.round(newFontWeight / 0.2)}` },
                    { 50: `font-variation-settings: 'wght' ${Math.round(newFontWeight / 0.5)}` },
                    { 100: `font-variation-settings: 'wght' ${newFontWeight}` }
                ]}>
                    <h2>False Front</h2>
            </AnimateKeyframes>
        </div>
    )
}
