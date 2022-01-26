import React, { useState, useEffect } from 'react';
import '../index.css';
import StickyNav from '../components/StickyNav';
import { useMutation } from '@apollo/client';
import { ADD_COUNTY_DATA } from '../utils/mutations';
import { getRelevantData } from '../utils/parseData';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/Auth';

export default function CountyDisplay({userCoords}) {
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


    return (
        <>
        <StickyNav userCoords={userCoords} countyData={countyData} /> 
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
            {/* {countyData.loading === true ? (
                
                <div style={{backgroundColor: "#fff", color: "#000"}}>
                    <h4> 
                        loading statistics
                    </h4>
                </div>
            ) : (
            <> */}
                {/* <div style={{backgroundColor: "#fff", color: "#000", textAlign: "left"}}>
                    <h4 onClick={handleCountyChange}>Displaying :  {countyData.county_name}</h4>
                    <h4>{countyData.title}</h4>
                    <ul> 
                        <li>Last Updated at: {countyData.last_update}</li>
                        <li>Inmate Population: {countyData.jail_population}</li>
                        <li> Incarceration Rate {countyData.incarceration} </li>
                        <li style={{fontSize: "12px"}}> In comparison to the total resident population in {countyData.county_name} of {countyData.resident_population}, the rate is determined per 100,000 residents. </li>
                    </ul>
                </div>
                <div style={{backgroundColor: "#fff", color: "#000", textAlign: "left"}}> */}
                {/* <Grid container spacing={2}>
                        <Grid item xs={8}>
                        <FontDisplay userCoords={userCoords} stateData={stateData} />
                    </Grid>
                </Grid> */}
                    {/* <h4>In comparison with the rest of {countyData.state_name}</h4>
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
                        
                    </ul> */}
                {/* </div>
            </>
            )}

            <div style={{backgroundColor: "#fff"}} 
            onClick={() => setShouldChange(true)}
                    onMouseLeave={() => setShouldChange(false)}>
                <h4 className={shouldChange ? 'new' : 'code' }> 
                ABCDEFGHIJKLM
                </h4>
            </div> */}
        {/* </>
        )} */}
   
    
   </>


    )}
    </>
    )   
}
