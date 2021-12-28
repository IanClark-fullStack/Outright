import React, { useState } from 'react';
import { geolocated } from "react-geolocated";
import Title from '../components/Title'

const Location = (props) => {    
    const [currLocation, setCurrLocation] = useState(''); 
    const changeStateName = (currentAddress) => setCurrLocation(currentAddress);

    const findState = async (latValue, longValue) => {
    
        try {
            latValue = await props.coords.latitude;
            longValue = await props.coords.longitude;
            let location = `${latValue},${longValue}`;
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location}&key=${process.env.REACT_APP_GEO}`);
            if (!response.ok) {
                throw new Error('could not find your current State');
            }
            const responseObj = await response.json();
            // Grab the full address string
            const resultingAddress = responseObj.results[0].formatted_address;
            // Split to Array 
            const stateName = responseObj.results[0].address_components[5].long_name;
            
            return changeStateName(stateName);

        } catch (err) {
            // console.error(err);
        }
        
    }
    
    
    return (
        <div>
            {!props.isGeolocationAvailable && <h5>Your browser does not support Geolocation, please a different browser</h5>}

            {!props.isGeolocationEnabled && <h5>Enable Location to Continue</h5>}


            {props.coords ? 
                <>
                    <Title currLocation={currLocation} setCurrLocation={findState(props.coords.latitude, props.coords.longitude)} />
                    <Title /> 
                    {/* findState(props.coords.latitude, props.coords.longitude) */}
                    <h3>{currLocation}</h3>
                    <p>{props.coords.latitude}</p>
                    <p>{props.coords.longitude}</p>
                </>

            :   <>
                    <h5> Getting Location </h5>
                </>
            
            }
        </div>
    )
};

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 1000
    })(Location);