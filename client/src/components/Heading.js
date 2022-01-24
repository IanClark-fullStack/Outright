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

// export default function Heading({ newFontWeight, weight, handleChange }) {
//     const [animation, setAnimation]= useState(0);
//     useEffect(() => {
//         renderAnimations()
//     }, [newFontWeight.loading])
    
//     const renderAnimations = () => {
//         return newFontWeight.loading ? setAnimation(1) : setAnimation(0)
//     }

//     const fontAnimation = keyframes`
//         from, 20%, 53%, 80%, to {
//             font-variation-settings: 'wght' 500;
//         }

//         40%, 43% {
//             font-variation-settings: 'wght' 400;
//         }

//         70% {
//             font-variation-settings: 'wght' 400;
//         }

//         100% {
//             font-variation-settings: 'wght' ${weight};
//         }
//     `

//     return (
//         <div>
//             <h3
//                 css={css`
//                 animation: ${fontAnimation} 1s ease infinite;
//                 `}
//                 >
//     some bouncing text!
//             </h3>
//         <h3 onChange={() => handleChange()}
//         animation={animation}
//         >
//             OutRight Typeface
//         </h3>
//         </div>
//     )
// }


export default function Heading({ userState }) {
    // const [exit, setExit] = React.useState(false);
    console.log(userState); 
    const [weight, setWeight] = useState(500);
   
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
    
    return (
        <>
        
            {!userState ? ( <h2>outright</h2> ) 

            : (  
                <>
                    <div css={animatedItem}>
                        <Typography variant="h1" css={animatedItem}>
                            outright*
                        </Typography>
                                {/* <Button onClick={() => setExit(true)}>Click to exit</Button> */}
                    </div>
                {/* {exit && <Button onClick={() => setExit(false)}>Click to enter</Button>} */}
                </>
            )}
        </>
    );
}
 

// export default function Heading({ newFontWeight, weight, handleChange }) {
//     const [exit, setExit] = React.useState(false);
//     const myEffect = keyframes`
//     0% {
//     opacity: 0;
//     transform: translateY(-200%);
//     }
//     100% {
//     opacity: 1;
//     transform: translateY(0);
//     }
//     `;
//     const myEffectExit = keyframes`
//     0% {
//     opacity: 1;
//     transform: translateY(0);
//     }
//     100% {
//     opacity: 0;
//     transform: translateY(-200%);
//     }
//     `;
//     const theme = useTheme();
//     const animatedItem = css`
//         animation: ${myEffect} 3000ms ${theme.transitions.easing.easeInOut};
//     `;
//     const animatedItemExiting = css`
//       animation: ${myEffectExit} 3000ms ${theme.transitions.easing.easeInOut};
//       opacity: 0;
//       transform: translateY(-200%);
//     `;
    
//     return (
//       <>
//         <div css={exit ? animatedItemExiting : animatedItem}>
//           <p>Hello CodeSandbox</p>
//           <p>Start editing to see some magic happen!</p>
//           <Button onClick={() => setExit(true)}>Click to exit</Button>
//         </div>
//         {exit && <Button onClick={() => setExit(false)}>Click to enter</Button>}
//       </>
//     );
//   }

//   const rootElement = document.getElementById("root");
// ReactDOM.render(<Heading />, rootElement);
 

