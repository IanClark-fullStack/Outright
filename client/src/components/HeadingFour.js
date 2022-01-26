/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css, keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Local from '../utils/Local';

export default function HeadingFour() {
    const [weight, setWeight] = useState(500);
    

    const getData = async () => {
        try {
            const { ...userData } = await Local.getLocationData();
            console.log({...userData})
    
                const val = userData.incarceration_rate; 
                setWeight(val)
            
            return weight; 
        } catch (err)  {
            console.log(err);
        }
    }

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

    const theme = useTheme();
    const animatedItem = css`
        animation: ${myEffect} 3000ms linear 0.3s forwards;
    `;


    return (       
                <>
                    <div css={animatedItem}>
                                <Typography variant="h3" css={animatedItem}>
                                    Figures
                                </Typography>
                    </div>
        
                </>
    );
}