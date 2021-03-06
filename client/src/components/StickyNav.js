import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useQuery } from '@apollo/client';
import { QUERY_STATE } from '../utils/queries';
import Local from '../utils/Local';
import outrightHeader from '../assets/images/prison-yard-outright.png';

export default function StickyNav({ userCoords, userStates }) {
    const { loading, data } = useQuery(QUERY_STATE, {
        variables: { state_name: userCoords.stateLocation },
    });
    const userState = data?.state || {};
    // if (!userState) {
    //     userState = Local.getLocationData();
    // }
    
    
    

    
   
    console.log(userState); 
    const weight = Number(userState.incarceration_rate)
    // const changeLocation = async (location) => {
    //     try {
    //         if (!userCoords.loading) {
    //             const locationString = `${userState.state_name}, ${userCoords.stateLocation}`;
    //             setUserLocation(locationString);
    //         }
    //         return userLocation;
            
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
        
    

    
    return (
        <>
            <AppBar sx={{
                height: 60,
                color: '#000',
                background: '#fff',
                boxShadow: 0,
                borderBottom: 2,
                borderBottomColor: '#000',
                borderBottomWidth: 2, 
                fontFamily: 'neue-haas-grotesk-display, sans-serif'

            }}>
            <Toolbar>
            
            {userCoords.loading === true || !userCoords ? (
                
                <div className='loadingStats'> 
                    <p className='locationLoading'>The majority of people held in local jails are unconvicted pretrial
                    detainees
                    <a href='#'><small className='sourceNumber'>`[1]`</small></a>
                    </p>
                    <p className='locationLoading'>Three-quarters (75%)
                    of all inmates who died in local jails were
                    unconvicted at the time of their death.
                        <a href='#'><small className='sourceNumber'>`[2]`</small></a>
                    </p>
                </div>

            ) : (

                <div className='preHeader'>
                    <p className='countyStateNav'>{userState.state_name}</p>
                    <p className='jailPopulationNav'> - Incarceration Rate : {userState.incarceration_rate} </p> 
                </div>
                
                
            )}
      
          </Toolbar>
         
        </AppBar>
        
       
        
        </>
       
        
    );
}