import React, { useState, useRef } from 'react';
import Title from '../components/Title'; 
import Location from '../components/Location';
import BackButton from '../components/BackButton';
import ForwardButton from '../components/ForwardButton';
import HeadingTwo from '../components/HeadingTwo';
import SlideForward from '../components/SlideForward';
import { Grid, Slide, Box, Button } from '@mui/material';
import courtHouse from '../assets/images/comp1/service-pnp-hec.png';
import voteCount from '../assets/images/comp1/service-pnp.png';
import prisonYard from '../assets/images/comp1/Prison-yard-outright2.png';
import StickyNav from '../components/StickyNav';

export default function About({ pageNum }) {
    let refNum = pageNum - 1;
    return (
        // <Box sx={{ flexGrow: 1, }}>
            <>
                <Grid item xs={2} md={2}>

                    <div className='onlyOnDesktop'>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sx={{marginTop: '10%',}}
                        >
                            <img className='scaleDown' src={courtHouse} alt="policy makers" />
                        </Grid>
                    </div>
                    
                        
                    {/* <Grid container direction="column" justifyContent='flex-start' alignItems='flex-end'>  */}

                    <Grid item xs={2} sx={{marginTop: '20%',}}>
                        <Grid container direction="column" justifyContent='space-between' alignItems="flex-start" className='shiftDown'>
                                <p className='subTitle'>{`0${refNum}`}</p>
                            
                                <p className='onlyOnDesktop subTitle'>The Problem</p>
                        </Grid>
                    </Grid>
                    

                    
                    <div className='onlyOnDesktop'>
                        <Grid container direction="row" justifyContent='center' alignItems='flex-start' spacing={2} sx={{marginTop: '15%',}}>
                            <img src={voteCount} className='scaleDown' width='315px' height='221px' alt="policy makers" />
                        </Grid>
                    </div>
                    
                    

                </Grid>

                <Grid item xs={3} md={3}>
                    
                        <Grid item xs={3} sm={3} md={3} className='fullWidthTitle'>
                            <HeadingTwo pageNum={pageNum}/>
                        </Grid>
                        {/* <div className='onlyOnDesktop'>
                            <Grid item xs={1} sm={1} md={1} sx={{marginTop: '20%', marginLeft: '4%', width: '10%'}}>
                                <img src={prisonYard} alt='vote counts' />
                            </Grid>
                        </div> */}

                        <div className='onlyOnDesktop'>
                            <Grid container direction="row" spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 1, md: 3, lg: 3 }} sx={{marginTop: '10%',}}>
                        
                                <Grid item xs={3} sm={3} md={3} lg={1}>
                                    <p className='projectDefinition'>How the Census Bureau counts incarcerated people creates a big issue for our nations democracy. Incarcerated individuals get counted wherever they end up jailed, not their actual home or community. This complicates community research and planning and skews representation both locally and federally.</p>
                                </Grid>

                                <Grid item xs={3} sm={3} md={3} lg={1}>
                                        <p className='projectDefinition'>By counting people as residents in the town that they are jailed, the Census Bureau actively defies most state constitutions. This is frustrating considering inmates are not allowed to vote and in most cases, return to their residence after they get released.</p>
                                </Grid>

                                <Grid item xs={3} sm={3} md={3} lg={1}>
                                        <p className='projectDefinition'>This antiquated approach to counting doesn't work with the current use of Census Data for redistricting. Simply put, states can't fully create fair and equal districts if the data that decisions are based upon is abundantly incorrect.</p>
                                </Grid>
                            </Grid>
                        </div>
                        

                        <div className='onlyOnMobile fullVar' style={{paddingLeft: '4%'}}>
                        
                        
                                <p className='projectDefinition'>How the Census Bureau counts incarcerated people creates a big issue for our nations democracy. Incarcerated individuals get counted wherever they end up jailed, not their actual home or community. This complicates community research and planning and skews representation both locally and federally.</p>
                           
                                    <p className='projectDefinition'>By counting people as residents in the town that they are jailed, the Census Bureau actively defies most state constitutions. This is frustrating considering inmates are not allowed to vote and in most cases, return to their residence after they get released.</p>
                            
                                    <p className='projectDefinition'>This antiquated approach to counting doesn't work with the current use of Census Data for redistricting. Simply put, states can't fully create fair and equal districts if the data that decisions are based upon is abundantly incorrect.</p>

                          
                        
                     
                        </div>
                    </Grid>
                    
                
                    
             

                
        </>
                
                
           
    
    )
}