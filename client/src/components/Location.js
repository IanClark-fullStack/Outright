import React, { useState, useEffect } from 'react';
import { geolocated } from "react-geolocated";
import Title from '../components/Title'
import JailData from '../components/JailData';
// import { searchData } from '../utils/API';
// import { readRemoteFile } from 'react-papaparse'
import { geoLocate } from '../utils/GEO';
import { getData } from '../utils/API';
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from '@apollo/client';
// Import the GraphQL mutation
import { ADD_USER } from '../utils/mutations';
// Import Auth to Apply idToken to User
import Auth from '../utils/Auth';

import { browserLocation } from '../utils/GEO';

export default function Location() {
    const [userCoords, setUserCoords] = useState({
        loading: true,
        location: undefined,
        stateLocation: undefined,
        countyLocation: undefined,
        error: undefined,
    });

    
    
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
    const findLocation = useLocation(browserLocation('AIzaSyC8VG5_qdxhjBO5_-5yw2gVUGOGDguefME'));

    console.log(findLocation);

    // if (userCoords) { 
    //     handleAddUser();
    // };
    

    return (
        <>
            {!userCoords ? (
                <div>Loading...</div>
            ) : (
                // If we are not loading, render the profiles list
                // Passing back the profiles and title prop to the Component
                <Title userCoords={userCoords} />
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