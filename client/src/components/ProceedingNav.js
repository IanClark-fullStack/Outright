import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Local from '../utils/Local';

export default function ProceedingNav() {
    const [headerText, setHeaderText] = useState('');
    const getData = async () => {
        try {
            const { ...userStateData } = await Local.getLocationData();

            const stateLocation = userStateData.state_name;
            const stateRate = userStateData.incarceration_rate;
            setHeaderText(`${stateLocation} - Incarceration Rate ${stateRate}`);
            return headerText;
        } catch (err)  {
            console.log(err);
        }
    }
    
    const titleValues = ['outright*', 'false front', 'amended', 'figures', 'liable', 'leaders']; 

    const userStateData = getData(); 

    console.log(userStateData);
    // const fontWeight = stateData.incarceration_rate; 

    
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
                    {!userStateData ? (
                        
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
                            <p className='countyStateNav'>{headerText}</p>   
                        </div>
                    )}
                </Toolbar>
        </AppBar>
        
        </>
        
    );
}
