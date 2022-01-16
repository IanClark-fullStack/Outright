import { useState, useEffect } from 'react';
import search from '../utils/API';


export default function JailStat({ currLocation, queryString }) {
    const findCountyData = async (url) => {
        const [countyData, setCountyData] = useState({
            loading: true,
            flip_code: undefined,
            last_update: undefined,
            name: undefined,
            state_name: undefined, 
            place_type: undefined,
            title: undefined,
            resident_population: undefined,
            incarceration: undefined,
            error: undefined,
        });
        useEffect(() => {
            readRemoteFile(url, {
                complete: (results, file) => {
                    console.log("Row data:", results.data);
                    setCountyData(...results.data);
                    
                }   
            })
                
        }, [url]);
        return await rows;
    }

    
    // useEffect(() => {
    //     const countyRes = getCountyData(county, state)
    //     console.log(countyRes);
    //     setCountyData(...countyRes)
    //     console.log(countyData);
    //     return countyData;
    // }, [countyData]);
    // console.log(countyData);
    // const countyResults = useData(getCountyData(userCoords.countyLocation, userCoords.stateLocation));
    let url =`https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv`;
    const rows = findCountyData(url);
    


    return (
        <div>
            <h1> 
            {findJailData(queryString)}
            </h1>
        </div>
    )
    

} 