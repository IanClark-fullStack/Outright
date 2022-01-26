import React, { useState, useEffect } from 'react';
import { geolocated } from "react-geolocated";
import Title from '../components/Title';
import JailData from '../components/JailData';
import CountyDisplay from './CountyDisplay';
import SlideForward from './SlideForward';
import outrightHeader from '../assets/images/prison-yard-outright.png';
import StickyNav from '../components/StickyNav';
import ForwardButton from '../components/ForwardButton';
import ButtonStack from '../components/ButtonStack';
// import { searchData } from '../utils/API';
// import { readRemoteFile } from 'react-papaparse'
import { geoLocate } from '../utils/GEO';
import { useQuery } from '@apollo/client';
import { QUERY_STATES } from '../utils/queries';
import Local from '../utils/Local';
import { Grid, Slide, Box, Button } from '@mui/material';
import { getData } from '../utils/API';
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from '@apollo/client';
// Import the GraphQL mutation

// Import Auth to Apply idToken to User


import { browserLocation } from '../utils/GEO';
import FontDisplay from './FontDisplay';

export default function Location({ pageNum }) {
    const [userCoords, setUserCoords] = useState({
        loading: true,
        location: undefined,
        stateLocation: undefined,
        countyLocation: undefined,
        error: undefined,
    });

    const { loading, data } = useQuery(QUERY_STATES);
    const userStates = data?.states || [];

    const useLocation = detector => {
        
    
        useEffect(() => {
            // Promise.resolve(detector())
            // .then(location => setUserCoords({ loading: false, location, stateLocation: location[0].long_name, countyLocation: location[1].long_name }))
            // .catch(error => setUserCoords({ loading: false, error }));
            Promise.resolve(detector())
            .then(location => setUserCoords({ loading: false, location, countyLocation: location[1].long_name, stateLocation: location[2].long_name }))
            .catch(error => setUserCoords({ loading: false, error }));
        }, []);
    
        return userCoords;
    };
    
    
    
    
    const findLocation = useLocation(browserLocation(`${process.env.REACT_APP_GEO}`));

    const handleAddState = async () => {
        try {
            if (!userCoords.loading) {
                Local.writeInLocation(findLocation.stateLocation);
            }
        } catch (err) {
            console.log(err);
        }
        
    }
    handleAddState(findLocation)

    return (
        <>
        {/* <CountyDisplay userCoords={userCoords} />  */}
        {!userCoords ? ( <div>Loading...</div> ) 

            : ( <>
                    <StickyNav userCoords={userCoords} userStates={userStates} /> 
                    {/* <img src={outrightHeader} className='headerImg' alt="logo" /> */}
                    <Box sx={{ flexGrow: 1 }}>

                        {/* <Title userCoords={userCoords} />  */}
                        
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 7, sm: 7, md: 5 }}> 
                                <Grid item xs={7} sm={7} md={4}>  
                                    <FontDisplay userCoords={userCoords} userStates={userStates} pageNum={pageNum} /> 
                                    
                                </Grid> 

                                <Grid item xs={7} sm={7} md={1}>
                                    <div className='onlyOnMobile'>
                                        <ForwardButton /> 
                                    </div>
                                </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                                
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 7, sm: 7, md: 5 }}> 
                            <Grid item xs={7} sm={7} md={4}>  
                                <p className='introBlock'>OUTRIGHT is a parametric display typeface that's tied to state incarceration numbers. It's appearance is subject to your state's rates. This project aims to create conversation around the act of Prison Gerrymandering. We want to describe what it is and provide resources for people that want to take action.</p>
                                <div className='onlyOnDesktop'>
                                    <ButtonStack /> 
                                </div>
                                    
                            </Grid>
                            

                            <Grid item xs={7} sm={7} md={1}>
                                <p className="dataSourcesBlock">*All of our data is derived from prisonpolicy.org and is updated daily. Just like our  democracy, outright is a work-in-progress. If there are any display issues please reach out!<br />
                                </p>
                            </Grid>
                        
                        </Grid>
                    </Box>
                    <div className='onlyOnMobile'>
                    <Box sx={{ flexGrow: 1 }}>
                                
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 0 }}>
                                    
                                    <Grid item xs={3} sm={3} md={1}>
                                        <ButtonStack />
                                    </Grid>
                                    <Grid item xs={5} sm={5} md={1}>
                                        <p className="dataSourcesBlock">*All of our data is derived from prisonpolicy.org and is updated daily. Just like our  democracy, outright is a work-in-progress. If there are any display issues please reach out!<br />
                                        </p>
                                    </Grid>
        
                                </Grid>
                            </Box>
                    </div>
                    
                    </> 
                )}
        </>

    )

} 



// const Location = (props) => {    
//     const [currLocation, setCurrLocation] = useState(''); 
//     const [countyLocation, setcountyLocation] = useState('');
//     const [stateData, setStateData] = useState([]);
//     const [userLocationData, setUserLocationData] = useState({ countyLocation: '', stateLocation: '' });
//     const changeLocationData = (currentCounty, currentState ) => setUserLocationData({ countyLocation: currentCounty, stateLocation: currentState });
//     const changeCountyName = (currentCounty) => setcountyLocation(currentCounty);
//     let stateName = '';
//     const findState = async (latValue, longValue) => {
//         try {
//             latValue = await props.coords.latitude;
//             longValue = await props.coords.longitude;
//             let location = `${latValue},${longValue}`;
//             const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location}&key=${process.env.REACT_APP_GEO}`);
//             if (!response.ok) {
//                 throw new Error('could not find your current State');
//             }
//             const responseObj = await response.json();

//             // Grab the full address string
//             // const resultingAddress = responseObj.results[0];
//             const resultingCounty = responseObj.results[0].address_components[4].long_name;

//             // Split to Array 
//             stateName = responseObj.results[0].address_components[5].long_name;
//             return changeLocationData(resultingCounty, stateName);
//             // console.log(countyLocation);
//             // return setQueryString(`http://www.sentencingproject.org/the-facts/#detail?state1Option=${currLocation}%20Total&state2Option=${comparisonStateLocation}`);

//         } catch (err) {
//             console.error(err);
//         }
        
//     }

    
    
    // return (
    //     <div>
    //         {!props.isGeolocationAvailable && <h5>Your browser does not support Geolocation, please a different browser</h5>}

    //         {!props.isGeolocationEnabled && <h5>Enable Location to Continue</h5>}


    //         {props.coords ? 
    //             <>
                    {/* {loadStart()} */}
                    
                    
                    {/* <JailStat currLocation={currLocation} queryString={queryString}/>  */}
                    {/* <JailData currLocation={currLocation} /> */}
                    {/* findState(props.coords.latitude, props.coords.longitude) */}
            //         <h3>{currLocation}</h3>
            //         <p>{props.coords.latitude}</p>
            //         <p>{props.coords.longitude}</p>
            //     </>

            // :   <>
            //         <h5> Getting Location </h5>
            //     </>
            
            // }
//         </div>
//     )
// };

// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false
//     },
//     userDecisionTimeout: 1000
//     })(Location);