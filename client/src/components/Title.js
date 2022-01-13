import React, { useState, useEffect } from 'react';
import '../index.css';
import { readRemoteFile } from 'react-papaparse';
import { useMutation } from '@apollo/client';
import { ADD_COUNTY_DATA } from '../utils/mutations';
import { getCountyData } from '../utils/parseData';
import { QUERY_COUNTY_DATA } from '../utils/queries';

export default function Title({userCoords}) {
    const [shouldChange, setShouldChange] = useState(false);
    // const [locationData, setLocationData] = useState(false);
    const [countyData, setCountyData] = useState({});
    // const [countyData, setCountyData] = useState({
    //     loading: true,
    //     flip_code: undefined,
    //     last_update: undefined,
    //     name: undefined,
    //     state_name: undefined, 
    //     place_type: undefined,
    //     title: undefined,
    //     resident_population: undefined,
    //     incarceration: undefined,
    //     error: undefined,
    // });

    // useEffect(() => {
    
    //     let url = `https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv`
    //     async function csvParse() {
    //         let response = await getCountyData(url, userCoords.countyLocation, userCoords.stateLocation);
            
    //         setCountyData({loading: false });
    //         console.log(response)
    //         return response;
    //     }
    //     // return countyData
    //     csvParse();
    // }, [userCoords]);
  
    // console.log(countyData)
    
    const callDataIntoPlay = async () => {
        let url = `https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv`;
        const resultData = getCountyData(url, userCoords.countyLocation, userCoords.stateLocation)
        console.log(resultData)
            

        return resultData;
        // console.log(stateSpecificData)
        // console.log(countySpecificData)
        
        // const stateSpecific = resultingJailData.stateSpecificData; 
        
    }
    // console.log(resultData)
    callDataIntoPlay()
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
        {userCoords.loading === true ? (
   
                <div style={{backgroundColor: "#fff"}} 
                onMouseEnter={() => setShouldChange(true)}
                        onMouseLeave={() => setShouldChange(false)}>
                    <h1 className={shouldChange ? 'new' : 'code' }> 
                    LOADING
                    </h1>
                </div>
            ) : (
            <>
            
            
            
                
               
                <div style={{backgroundColor: "#fff"}} 
                onClick={() => callDataIntoPlay()}
                        onMouseLeave={() => setShouldChange(false)}>
                    <h1 className={shouldChange ? 'new' : 'code' }> 
                    ABCDEFGHIJKLM
                    </h1>
                </div>
            </>
            )}
            
        </>
    )
    

} 