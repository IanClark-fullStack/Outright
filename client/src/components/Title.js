import React, { useState, useEffect } from 'react';
import '../index.css';
import { readRemoteFile } from 'react-papaparse';
import StickyNav from '../components/StickyNav';
import outrightHeader from '../assets/images/outright-header.png';
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
        <StickyNav userCoords={userCoords} countyData={countyData} />
        <img src={outrightHeader} className='headerImg' alt="logo" /> 
        <div className='infoContainer'>
            <h1 
                className={userCoords.loading ? 'titleHeading baseFont' : 'titleHeading fontAverage1' }  
                // style={{fontWeight: "900"}}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                OUTRIGHT *
            </h1>
            <p className='introBlock'>OUTRIGHT is an open source headline-inspired typeface whose appearance is determined by local incarceration numbers.<br /> It can only be changed by actionable work in your community.</p>
        </div>
        


        {userCoords.loading === true ? (
                <div style={{backgroundColor: "#fff"}} 
                onMouseEnter={() => handleAddUser()}
                        onMouseLeave={() => setShouldChange(false)}>
                    <h4 className={shouldChange ? 'new' : 'code' }> 
                    loading location 
                    </h4>
                </div>
            ) : (

                <>
                {countyData.loading === true ? (
                    
                    <div style={{backgroundColor: "#fff", color: "#000"}}>
                        <h4> 
                            loading statistics
                        </h4>
                    </div>
                ) : (
                <>
                    <div style={{backgroundColor: "#fff", color: "#000", textAlign: "left"}}>
                        <h4 onClick={handleCountyChange}>Displaying :  {countyData.county_name}</h4>
                        <h4>{countyData.title}</h4>
                        <ul> 
                           
                            <li>Last Updated at: {countyData.last_update}</li>
                            <li>Inmate Population: {countyData.jail_population}</li>
                            <li> Incarceration Rate {countyData.incarceration} </li>
                            <li style={{fontSize: "12px"}}> In comparison to the total resident population in {countyData.county_name} of {countyData.resident_population}, the rate is determined per 100,000 residents. </li>
                        </ul>
                    </div>
                    <div style={{backgroundColor: "#fff", color: "#000", textAlign: "left"}}>
                        <h4>In comparison with the rest of {countyData.state_name}</h4>
                        <ul> 
                           
                            { stateData.map((state, index) => 
                            <>
                                <li key={state.flip_code} className={userCoords.loading ? 'titleHeading fontAverage1' : 'titleHeading fontMinusFive'}>{state.county_name} </li>
                                <li key={state.id} style={{fontSize: "12px"}}> Last Updated at: <span style={{fontSize: "20px"}}>{state.last_update}</span> </li>
                                <li key={state.jail_population.toString()} style={{fontSize: "12px"}}> Population of <span style={{fontSize: "20px"}}>{state.jail_population}</span>inmates</li>
                                <li key={state.incarceration.toString()} style={{fontSize: "12px"}}> Incarceration Rate <span style={{fontSize: "26px"}}>{state.incarceration}</span></li>
                                <li key={index} style={{fontSize: "12px"}} style={{fontSize: "12px"}}>  In comparison to the total resident population in {state.county_name} of <span style={{fontSize: "20px"}}>{state.resident_population}</span>, the rate is determined <span style={{fontSize: "20px"}}> per 100,000 residents. </span> </li>
                                </>
                            )}
                            
                        </ul>
                    </div>
                </>
                )}

                <div style={{backgroundColor: "#fff"}} 
                onClick={() => setShouldChange(true)}
                        onMouseLeave={() => setShouldChange(false)}>
                    <h4 className={shouldChange ? 'new' : 'code' }> 
                    ABCDEFGHIJKLM
                    </h4>
                </div>
            </>
            )}
            
        </>
    )
    

} 