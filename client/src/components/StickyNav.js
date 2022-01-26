import { useState } from 'react';

// import NavLinks from './NavLinks';
// const navLinks = ['Projects', 'About', 'Contact', 'Resume'];
// const onHover = 'border-b-2 border-bright mx-1 md:mx-5';

export default function StickyNav(props) {
    const [userLocation, setUserLocation] = useState('');
    const changeLocation = (location) => {
        if (!props.userCoords.loading) {
            const locationString = `${props.userCoords.countyLocation}, ${props.userCoords.stateLocation}`;
            setUserLocation(locationString);
        }
        return userLocation;
    }

    
    return (
        <nav>
            {props.userCoords.loading === true ? (
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
                    
                    <p className='countyStateNav'>{props.userCoords.countyLocation}, {props.userCoords.stateLocation} </p>
                    <p className='jailPopulationNav'> - Jail Population : {props.countyData.jail_population} </p>

                </div>
                
            )}
        
            {/* <a onClick={() => changeView('home')}>
                <h4 className='justify-start text-3xl ml-2 md:text-6xl'>iC</h4>
            </a> */}
                {/* <NavLinks navLinksProp={navLinks} /> */}
            {/* <ul className='flex justify-end mx-2 md:ml-14'>
                
                { navLinks.map((link, index) => 
                    <NavLinks key={index} link={link} changeView={changeView} pageSelect={pageSelect} /> 
                )}
            
            </ul> */}
        
        </nav>
        
    );
}