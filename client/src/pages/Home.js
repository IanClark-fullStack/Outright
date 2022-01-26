// import { geolocated } from "react-geolocated";
import React, { useState, useRef } from 'react';
import Title from '../components/Title'; 
import Location from '../components/Location';
import BackButton from '../components/BackButton';
import ForwardButton from '../components/ForwardButton';
import outrightHeader from '../assets/images/prison-yard-outright.png';
import About from './About';
import HomeButton from '../components/HomeButton';
import ProceedingNav from '../components/ProceedingNav';
import courtHouse from '../assets/images/comp1/service-pnp-hec.png';
import voteCount from '../assets/images/comp1/service-pnp.png';
import prisonYard from '../assets/images/comp1/Prison-yard-outright2.png';
import SlideForward from '../components/SlideForward';
import { Grid, Slide, Box, Button, Item } from '@mui/material';



export default function Home() {
    const [pageNum, setPageNum] = useState(1);
    const [checked, setChecked] = React.useState(false);
    
    // const containerRef = React.useRef(null);
    
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    const viewForward = (num) => setPageNum(num + 1);
    const viewHome = () => setPageNum(1);
    const viewBackward = (num) => setPageNum(num - 1);
    const defaultView = () => {
        if (pageNum === 1) {
            return <>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                        
                        {/* <Grid item xs={0} sm={0} md={1}>
                            <h5>xs=2</h5>
                        </Grid> */}
                        <Grid item xs={3} sm={3} md={10}>
                            <Location />
                        </Grid>
                        <Grid item xs={1} sm={1} md={2}>
                            <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
                                <ForwardButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewForward={viewForward} />
                            
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            
            </>
        }
    }
    let refNum = pageNum - 1;

    return (
        <>
        
        
            <main>
                {pageNum === 1 && 
                <>
                <header className='fullWidth'>
                    <img src={outrightHeader} className='headerImg' alt="logo" />
                </header>
                
                <section style={{margin: '1rem 2rem'}}>
                    <Box sx={{ flexGrow: 1, }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                            
                            {/* <Grid item xs={0} sm={0} md={1}>
                                <h5>xs=2</h5>
                            </Grid> */}
                            <Grid item xs={3} sm={3} md={10}>
                                <Location pageNum={pageNum} />
                            </Grid>
                            <Grid item xs={1} sm={1} md={2}>
                                <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
                                    <ForwardButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewForward={viewForward} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </section>
            </>
            }
           
            {pageNum === 2 &&
            <>
            <header className='fullWidth onlyOnMobile'>
                <Grid container direction="row" className='fullWidthVar' columns={5} spacing={0}>
                    <Grid item xs={2} sm={2}>
                        <img className='fullWidthVar' src={voteCount} alt="policy makers" />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <img className='fullWidthVar' src={courtHouse} alt="policy makers" />
                    </Grid>
                    <Grid item xs={1} sm={1}>
                        <img className='fullWidthVar' src={prisonYard} alt='vote counts' />
                    </Grid>
                    
                    
                    

                </Grid> 
                </header>
            <section style={{margin: '20vh 2rem'}}>
                
            
                <Box sx={{ flexGrow: 1,}}>
                <ProceedingNav />
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 5, sm: 5, md: 12 }} sx={{marginTop: '10%',}}>
                        <Grid item xs={3} sm={3} md={1}>
                            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                                <BackButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewBackward={viewBackward} />
                            </Grid>
                            
                        </Grid>

                   
                        

                        <Grid item xs={3} sm={3} md={10}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={5}>
                                <About pageNum={pageNum} />
                            </Grid>
                        </Grid>

                        <Grid item xs={3} sm={3} md={1}>
                            <Grid container direction='row' justifyContent='flex-end' alignItems='flex-start'>
                                <ForwardButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewForward={viewForward} />
                            </Grid>
                            
                        </Grid>
                    </Grid>
                        
                        
               

                    
                            
                </Box>
               
                            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-end">
                                <HomeButton pageNum={pageNum} viewHome={viewHome} />
                                </Grid>
                    
                    {/* <About pageNum={pageNum} checked={checked} handleChange={handleChange} pageNum={pageNum} viewForward={viewForward} /> */}
                </section>
            </>
            
            }  
                
        </main>
        
        </>
  )   
};
