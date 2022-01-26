import HeadingThree from '../components/HeadingThree';
import HeadingFour from '../components/HeadingFour';
import { Grid, Box } from '@mui/material';
import outrightBars from '../assets/images/comp2/outright-master.png';
import outrightLargeBars from '../assets/images/comp2/master-outright.png';
import outrightServe from '../assets/images/comp2/service-pnp-cs.png';


export default function Solution({ pageNum }) {
    let refNum = pageNum - 1;
    return (
            <>
                <Box sx={{ flexGrow: 1, }}>
                    <Grid container spacing={{ xs: 1, md: 0 }}> 
                        
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container direction="row">
                                    <Grid item xs={10} md={8} className='onlyOnDesktop'>
                                {/* <Grid item xs={3} sm={3} md={3} className='fullWidthTitle'> */}
                                        <HeadingThree pageNum={pageNum}/>
                                    </Grid>
                                    <Grid item xs={10} md={2} className='onlyOnDesktop'>
                                        <img src={outrightBars} className='scaleDown onlyOnDesktop' alt="policy makers" />
                                    </Grid>
                                    <Grid item xs={10} md={2} className='onlyOnDesktop'>
                                        <img src={outrightLargeBars} className='scaleDown onlyOnDesktop' alt="policy makers" />
                                    </Grid>
                                    
                                </Grid>
                                
                                <Grid container direction="row">
                                    <Grid item xs={10} md={12} className='onlyOnDesktop'>
                                        
                                        <Grid container direction="row">
                                            <Grid item xs={10} md={2} className='onlyOnDesktop'>
                                                <Grid container direction="row" justifyContent='flex-end' alignItems='flex-end' sx={{marginTop: '15%',}}>
                                                    <p className='onlyOnDesktop subTitle'>The Solution</p>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={7}> 
                                                <HeadingFour />
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3}> 
                                                <p className='projectDefinition'>Prison Policy's  
                                                 <a href='https://www.prisonpolicy.org/releasecards/model.html' target='_blank' className='descLink' style={{ textDecoration: 'none', fontWeight: 600, color: 'black' }}> legislation page</a> has links to model legislation, pending bills and past legislative efforts. And the report, <a href='https://www.prisonersofthecensus.org/solutions.html' target='_blank' className='descLink' style={{ textDecoration: 'none', fontWeight: 600, color: 'black' }}>Implementing Reform: How Maryland & New York Ended Prison Gerrymandering</a> provides a detailed account of how such laws are actually implemented.</p>
                                            </Grid>
                                            
                                
                                        </Grid>
                                    </Grid>
                                </Grid>

                                
                            </Box>
                            
                            <Grid item xs={12} md={12} className='onlyOnDesktop'>
                                
                            <Grid container direction='row'> 
                                    <Grid xs={0} md={1} sx={{maxWidth: '205px'}} className='onlyOnDesktop'>
                                        <img src={outrightServe} className='onlyOnDesktop' alt="policy makers" />
                                    </Grid>
                                    <Grid item md={2}>
                                    </Grid>
                                    
                                    
                                    <Grid item xs={9} md={3}>
                                        <p className='projectDefinition'>The Census Bureau should count incarcerated people as residents of their home. The Census count is every 10 years and although the 2020 cycle has passed, states can create a state-level census. This census would collect the home addresses of people in prison and adjust the 2020 census numbers before redistricting.</p>
                                    </Grid>

                                    <Grid item xs={9} md={3}>
                                            <p className='projectDefinition'>As a long term solution, and in preparation for 2030, states can standardize the collection of home address information at the time of arrest. In time, this collection could get used in future redistricting or for the Census Bureau to use directly.</p>
                                    </Grid>

                                    <Grid item xs={9} md={3}>
                                            <p className='projectDefinition'>An immediate solution is to prevent legislative districts from using prison counts as padding. This works by counting jailed populations as "address unknown" and at-large in redistricting data. Electoral harm caused by prison gerrymandering would be mostly eliminated.</p>
                                    </Grid>
                            </Grid>
                        </Grid>
                        <Box sx={{ flexGrow: 1, }} className='onlyOnMobile'>
                            <Grid container spacing={{ xs: 1, md: 2 }}> 
                            

                                <Grid item xs={12} md={7}>
                                {/* <Grid item xs={3} sm={3} md={3} className='fullWidthTitle'> */}
                                <Grid container direction='row' spacing={{ xs: 1, md: 0 }}></Grid>
                                    <Grid item xs={11} md={7}>
                                            <HeadingThree pageNum={pageNum} />
                                    </Grid>
                                    <Grid item xs={1} md={7}>
                                    </Grid>
                                </Grid>
                                <Grid container direction='row' spacing={{ xs: 1, md: 0 }}>
                                    <Grid item xs={2} md={7}>
                                    </Grid>
                                    <Grid item xs={10} md={7}>
                                            <HeadingFour pageNum={pageNum} />
                                    </Grid>
                                </Grid>
                                    <Grid item xs={2} md={7}>
                                    </Grid>
                                    <Grid item xs={10} md={7}>
                                        <p className='projectDefinition'>How the Census Bureau counts incarcerated people creates a big issue for our nations democracy. Incarcerated individuals get counted wherever they end up jailed, not their actual home or community. This complicates community research and planning and skews representation both locally and federally.</p>
                                        

                                        <p className='projectDefinition'>By counting people as residents in the town that they are jailed, the Census Bureau actively defies most state constitutions. This is frustrating considering inmates are not allowed to vote and in most cases, return to their residence after they get released.</p>
                            
                                        <p className='projectDefinition'>This antiquated approach to counting doesn't work with the current use of Census Data for redistricting. Simply put, states can't fully create fair and equal districts if the data that decisions are based upon is abundantly incorrect.</p>
                                    </Grid>
                                </Grid>
                        
           
            </Box>
            </Grid>
            </Box>
            
        </>
    )
}