import React, { useState, useEffect } from 'react';
import '../index.css';
import { readRemoteFile } from 'react-papaparse';
import StickyNav from '../components/StickyNav';
import FontDisplay from '../components/FontDisplay';
import outrightHeader from '../assets/images/outright-header.png';
import { useMutation } from '@apollo/client';
import { ADD_COUNTY_DATA } from '../utils/mutations';
import { getRelevantData } from '../utils/parseData';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/Auth';
import Grid from '@mui/material/Grid'
import { QUERY_COUNTY_DATA } from '../utils/queries';

export default function Title({userCoords}) {
    const [shouldChange, setShouldChange] = useState(false);
    // const [locationData, setLocationData] = useState(false);
    // const [countyData, setCountyData] = useState({});
    // const [countyData, setCountyData] = useState({
    //     loading: true,
    //     flip_code: undefined,
    //     last_update: undefined,
    //     jail_population: undefined,
    //     county_name: undefined,
    //     state_name: undefined, 
    //     place_type: undefined,
    //     title: undefined,
    //     resident_population: undefined,
    //     incarceration: undefined,
    //     error: undefined,
    // });

    const [stateData, setStateData] = useState([]);

    // useEffect(() => {
    
    //     async function csvParse() {
    //         let response = await getRelevantData(userCoords.countyLocation, userCoords.stateLocation);
    //         console.log(response)
    //         setCountyData({loading: false,  ...response.county  });
    //         setStateData([...response.stateCounties]);
            
    //         return response;
    //     }
    //     // return countyData
    //     csvParse();
    // }, [userCoords]);
    // console.log(countyData)
    // console.log(stateData)


    // const [addUser, { err, data }] = useMutation(ADD_USER);
    // const handleAddUser = async () => {
    //     try {
    //         Auth.getToken()
    //         const { data } = await addUser();
    //         Auth.login(data.addUser.token);
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // - Reference to Mutation at index[0]
    // const [addCountyData, { error }] = useMutation(ADD_COUNTY_DATA);
    
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
    
    



    // const callDataIntoPlay = async () => {
    //     try {
            
    //         const resultData = await getRelevantData(userCoords.countyLocation, userCoords.stateLocation)
    //         console.log(resultData)
            
    //         return resultData;
    //     // console.log(stateSpecificData)
    //     // console.log(countySpecificData)
        
    //     // const stateSpecific = resultingJailData.stateSpecificData; 

    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // // console.log(resultData)
    // callDataIntoPlay()
    // console.log(resultData)
    



        // useEffect(() => {
            // let url = `https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv`;
            // const res = getCountyData(url, userCoords.countyLocation, userCoords.stateLocation)
            
            //     console.log(res)
            // const handleChange = (vals) => {
            //     console.log(vals)
            //     setCountyData({
            //         loading: false,
            //         flip_code,
            //         last_update,
            //         name,
            //         state_name, 
            //         place_type,
            //         title,
            //         resident_population,
            //         incarceration
            //     })
            //     console.log(countyData)
            // }
            
            
           
        // }, [userCoords]);

        
    
        
    
    // let response = handleChange(getCountyData(`https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv`, userCoords.countyLocation, userCoords.stateLocation))

    // console.log(response);


    
    
    // const countyResults = useData(getCountyData(userCoords.countyLocation, userCoords.stateLocation));

    // const rows = getCountyData(url);
    return (
        <>
        
        <img src={outrightHeader} className='headerImg' alt="logo" /> 
        <div className='infoContainer'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    {/* <FontDisplay userCoords={userCoords} stateData={stateData} /> */}
                    <p className='introBlock'>OUTRIGHT is an open source headline-inspired typeface whose appearance is determined by local incarceration numbers. It can only be changed by actionable work in your community.</p>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={12} sm={2}
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end">
                    <p className="introBlock">*All data derived from LoremSource.org and is updated daily. If there are any display issues please leave us a message HERE<br />
                        <span className="copyright">VERSION 1.0</span>
                        <span className="copyright2">Ⓒ2022</span>
                        
                    </p>
                    
                </Grid>
            </Grid>
        </div>
    </>
    )
    

} 