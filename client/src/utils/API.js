// import geolocated from "../pages/Home";
// import { geolocated } from "react-geolocated";

// const axios = require('axios');
// const cheerio = require('cheerio');

// let userStateLocation = 'Alabama';
// let comparisonStateLocation = 'California';
// const stateUrl = `http://www.sentencingproject.org/the-facts/#detail?state1Option=${userStateLocation}%20Total&state2Option=${comparisonStateLocation}`;  

// let mapUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&`;

// export const geolocated = ({
//     positionOptions: {
//         enableHighAccuracy: false
//     },
//     userDecisionTimeout: 5000,
// }) => {
//     console.log(props.coords)
    
//     return (
//         <div>
//             {!props.isGeolocationAvailable && <h5>Your browser does not support Geolocation, please a different browser</h5>}

//             {!props.isGeolocationEnabled && <h5>Enable Location to Continue</h5>}


//             {props.coords ? 
//                 <>
//                     <Title /> 
//                     <p>{`Latitude: ${props.coords.latitude}`}</p>
//                     <p>{`Latitude: ${props.coords.longitude}`}</p>
//                 </>

//             :   <>
//                     <h5> Getting Location </h5>
//                 </>
            
//             }
//         </div>
//     )
// };



// export const createLocation = async (userStateLocation,  comparisonStateLocation) => {
//     try {
//         const htmlRepsonse = await axios.get(stateUrl);
//         const jQueryResponse = await cheerio.load(htmlRepsonse.data);
//         console.log(jQueryResponse);
//     } catch (err) {
//         console.log(err);
//     }
    
    // return fetch(jQueryResponse, {
    //     method: 'GET', 
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //     }
    // });

// export const createLocation = async () => {
//     const htmlRepsonse = await axios.get(stateUrl);
//     const jQueryResponse = await cheerio.load(htmlRepsonse.data);
//     let data = [];
//     console.log(jQueryResponse);
//     console.log(htmlRepsonse);
// };