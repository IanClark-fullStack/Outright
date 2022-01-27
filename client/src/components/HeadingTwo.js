/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css, keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Local from '../utils/Local';

export default function HeadingTwo({ pageNum }) {
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
   
    const titleValues = ['outright*', 'false front', 'amended', 'figures', 'liable', 'leaders']; 

    const userData = getData(); 
   
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
                    <div css={animatedItem}>
                            
                                <Typography variant="h3" css={animatedItem}>
                                    False
                                </Typography>

                                <Typography variant="h3" css={animatedItem}>
                                    FRont
                                </Typography>
                    </div>
                {/* {exit && <Button onClick={() => setExit(false)}>Click to enter</Button>} */}
                </>
    );
}