import React, { useState, useEffect } from 'react';
import '../index.css';
import { readRemoteFile } from 'react-papaparse';
import { useMutation } from '@apollo/client';
import { ADD_COUNTY_DATA } from '../utils/mutations';
import { getRelevantData } from '../utils/parseData';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/Auth';
import { QUERY_COUNTY_DATA } from '../utils/queries';

export default function Title({userCoords}) {
    const [shouldChange, setShouldChange] = useState(false);
    // const [locationData, setLocationData] = useState(false);
    // const [countyData, setCountyData] = useState({});
    const [countyData, setCountyData] = useState({
        loading: true,
        flip_code: undefined,
        last_update: undefined,
        jail_population: undefined,
        county_name: undefined,
        state_name: undefined, 
        place_type: undefined,
        title: undefined,
        resident_population: undefined,
        incarceration: undefined,
        error: undefined,
    });

    const [stateData, setStateData] = useState([]);

    useEffect(() => {
    
        async function csvParse() {
            let response = await getRelevantData(userCoords.countyLocation, userCoords.stateLocation);
            console.log(response)
            setCountyData({loading: false,  ...response.county  });
            setStateData([...response.stateCounties]);
            
            return response;
        }
        // return countyData
        csvParse();
    }, [userCoords]);
    console.log(countyData)
    console.log(stateData)


    const [addUser, { err, data }] = useMutation(ADD_USER);
    const handleAddUser = async () => {
        try {
            Auth.getToken()
            const { data } = await addUser();
            Auth.login(data.addUser.token);
        } catch (err) {
            console.log(err)
        }
    }

    // - Reference to Mutation at index[0]
    const [addCountyData, { error }] = useMutation(ADD_COUNTY_DATA);
    
    const handleCountyChange = async () => {
        try {
            const { data } = await addCountyData({
                
                variables: { 
                    state_name: countyData.state_name,
                    county_name: countyData.county_name,
                    last_update: countyData.last_update,
                    flip_code: countyData.flip_code,
                    jail_population: countyData.jail_population,
                    place_type: countyData.place_type,
                    title: countyData.title, 
                    resident_population: countyData.resident_population,
                    incarceration: countyData.incarceration
                }
            })
            console.log(data)
        } catch (err) {
            console.log(err);
        }
        
    }
    
    



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
        {userCoords.loading === true ? (
                <div style={{backgroundColor: "#fff"}} 
                onMouseEnter={() => handleAddUser()}
                        onMouseLeave={() => setShouldChange(false)}>
                    <h1 className={shouldChange ? 'new' : 'code' }> 
                    loading location 
                    </h1>
                </div>
            ) : (

                <>
                {countyData.loading === true ? (
                    
                    <div style={{backgroundColor: "#fff", color: "#000"}}>
                        <h1> 
                            loading statistics
                        </h1>
                    </div>
                ) : (
                <>
                    <div style={{backgroundColor: "#fff", color: "#000", textAlign: "left"}}>
                        <h1 onClick={handleCountyChange}>Your County {countyData.county_name}</h1>
                        <ul> 
                            <li>Last Updated at: {countyData.last_update}</li>
                            <li>Population of {countyData.jail_population} inmates</li>
                            <li> Incarceration Rate {countyData.incarceration} inmates</li>
                            <li style={{fontSize: "12px"}}> In comparison to the total resident population in {countyData.county_name} of {countyData.resident_population}, the rate is determined per 100,000 residents. </li>
                        </ul>
                    </div>
                    <div style={{backgroundColor: "#fff", color: "#000", textAlign: "left"}}>
                        <h1>In comparison with the rest of {countyData.state_name}</h1>
                        <ul> 
                           
                            { stateData.map((state, index) => 
                            <>
                                <li key={index} style={{fontSize: "16px"}}> {state.county_name} </li>
                                <li key={index}> Last Updated at: {state.last_update} </li>
                                <li key={index}>Population of {state.jail_population} inmates</li>
                                <li key={index}> Incarceration Rate {state.incarceration} inmates</li>
                                <li key={index} style={{fontSize: "12px"}}> In comparison to the total resident population in {state.county_name} of {state.resident_population}, the rate is determined per 100,000 residents. </li>
                                </>
                            )}
                            
                        </ul>
                    </div>
                </>
                )}

                <div style={{backgroundColor: "#fff"}} 
                onClick={() => setShouldChange(true)}
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