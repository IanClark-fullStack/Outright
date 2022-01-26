/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { jsx } from '@emotion/react'
import { useQuery } from '@apollo/client';
import { QUERY_STATE } from '../utils/queries';
import { css, keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import ReactDOM from "react-dom";
import Local from '../utils/Local';

export default function Heading({ userState, pageNum }) {
    const [weight, setWeight] = useState(500);
    console.log(pageNum)
    // if (!userCoords) {
    //     weight = 500;
    // } 

    //     const { loading, data } = useQuery(QUERY_STATE, {
    //     variables: { state_name: userCoords.stateLocation },
    // });
    // const userState = data?.state || {};
    // console.log(userState); 
    // weight = Number(userState.incarceration_rate)
    
    // const { loading, data } = useQuery(QUERY_STATE, {
    //     variables: { state_name: userCoords.stateLocation },
    // });
    // const userState = data?.state || {};
    // console.log(userState); 
    // const weight = Number(userState.incarceration_rate)
    
    // console.log(weight)

    const getData = async () => {
        try {
            const { ...userData } = await Local.getLocationData(userState);
            console.log({...userData})
            if (userState) {
                const newVal = Number(userState.incarceration_rate); 
                setWeight(newVal); 
                return newVal;
            } else if (userData) {
                const val = userData.incarceration_rate; 
                setWeight(val)
            }
            return weight; 
        } catch (err)  {
            console.log(err);
        }
    }
   
    const titleValues = ['outright*', 'false front', 'amended', 'figures', 'liable', 'leaders']; 

    const userData = getData(); 
    console.log(weight)
    // const fontWeight = stateData.incarceration_rate; 
    console.log(userData)
    const myEffect = keyframes`
    0% {
    font-variation-settings: 'wght' 700;
    }
    20%% {
    font-variation-settings: 'wght' ${weight / 2};
    }
    100% {
    font-variation-settings: 'wght' ${weight};
    }
    `;
    const myEffectExit = keyframes`
    0% {
        font-variation-settings: 'wght' ${weight};
    }
    100% {
        font-variation-settings: 'wght' 500;
    }
    `;
    const theme = useTheme();
    const animatedItem = css`
        animation: ${myEffect} 3000ms linear 0.3s forwards;
    `;
    // const animatedItemExiting = css`
    //   animation: ${myEffectExit} 3000ms ${theme.transitions.easing.easeInOut};
    //   font-variation-setting: 'wght' 500;
    // `;

    const textContent = () => {
        if (pageNum === 1) {
            return <> {titleValues[0]} </>
        } else if (pageNum === 2) {
            return <> {titleValues[1]} </>
        }
    }

    return (
        <>
        
            {!userState ? ( <h2>outright</h2> ) 

            : (  
                <>
                    <div css={animatedItem}>
                            
                                <Typography variant="h1" css={animatedItem}>
                                    outright*
                                </Typography>
                    </div>
                {/* {exit && <Button onClick={() => setExit(false)}>Click to enter</Button>} */}
                </>
            )}
        </>
    );
}