// import HeadingThree from '../components/HeadingThree';
// import HeadingFour from '../components/HeadingFour';
// import { Grid, Box } from '@mui/material';
// import outrightBars from '../assets/images/comp2/outright-master.png';
// import outrightLargeBars from '../assets/images/comp2/master-outright.png';


// export default function Solution({ pageNum }) {
//     let refNum = pageNum - 1;
//     return (
//             <>
//                 <Box sx={{ flexGrow: 1, }}>
//                     <Grid container spacing={{ xs: 2, md: 0 }}> 
                        
//                             <Box sx={{ flexGrow: 1 }}>
//                                 <Grid container direction="row">
//                                     <Grid item xs={10} md={8}>
//                                 {/* <Grid item xs={3} sm={3} md={3} className='fullWidthTitle'> */}
//                                         <HeadingThree pageNum={pageNum}/>
//                                     </Grid>
//                                     <Grid item xs={10} md={2} className='onlyOnDesktop'>
//                                         <img src={outrightBars} className='scaleDown onlyOnDesktop' alt="policy makers" />
//                                     </Grid>
//                                     <Grid item xs={10} md={2} className='onlyOnDesktop'>
//                                         <img src={outrightLargeBars} className='scaleDown onlyOnDesktop' alt="policy makers" />
//                                     </Grid>
                                    
//                                 </Grid>
                                
//                                 <Grid container direction="row">
//                                     <Grid item xs={10} md={12} className='onlyOnDesktop'>
                                        
//                                         <Grid container direction="row">
//                                             <Grid item xs={10} md={2} className='onlyOnDesktop'>
//                                                 <Grid container direction="row" justifyContent='flex-end' alignItems='flex-start' sx={{marginTop: '15%',}}>
//                                                     <p className='onlyOnDesktop subTitle'>The Problem</p>
//                                                 </Grid>
//                                             </Grid>
//                                             <Grid item xs={3} sm={3} md={7}> 
//                                                 <HeadingFour />
//                                             </Grid>
//                                             <Grid item xs={3} sm={3} md={3}> 
//                                                 <p className='projectDefinition'>This antiquated approach to counting doesn't work with the current use of Census Data for redistricting. Simply put, states can't fully create fair and equal districts if the data that decisions are based upon is abundantly incorrect.</p>
//                                             </Grid>
                                
//                                         </Grid>
//                                     </Grid>
//                                 </Grid>

                                
//                             </Box>

//                         <Grid item xs={9} md={3}>
                            
//                                 <Grid
//                                     container
//                                     direction="row"
//                                     justifyContent="center"
//                                     alignItems="center"
//                                     className='onlyOnDesktop deskSpace'
//                                 >
//                                     {/* <img className='scaleDown onlyOnDesktop' src={courtHouse} alt="policy makers" /> */}
//                                 </Grid>
                                
//                                 <Grid container direction="row">
//                                     <p className='onlyOnDesktop subTitle'>The Problem</p>
//                                 </Grid>

//                                 <Grid container direction="row" justifyContent='flex-end' alignItems='flex-start' sx={{marginTop: '15%',}}>
//                                     {/* <img src={voteCount} className='scaleDown onlyOnDesktop' width='315px' height='221px' alt="policy makers" /> */}
//                                 </Grid>
                    
//                         </Grid>
//                         <Grid item xs={9} md={9} className='onlyOnDesktop'>
//                             <Box sx={{ flexGrow: 1 }} className='deskTitle'>
//                             {/* <Grid item xs={3} sm={3} md={3} className='fullWidthTitle'> */}
//                                     <HeadingThree pageNum={pageNum}/>
//                                     <HeadingFour />
//                             </Box>
                            
//                         <Box sx={{ flexGrow: 1 }}>
//                             <Grid container direction="row" justifyContent='space-between' alignItems='center'>
                            
//                                 <Grid item xs={9} md={3}>
//                                     <p className='projectDefinition'>How the Census Bureau counts incarcerated people creates a big issue for our nations democracy. Incarcerated individuals get counted wherever they end up jailed, not their actual home or community. This complicates community research and planning and skews representation both locally and federally.</p>
//                                 </Grid>

//                                 <Grid item xs={9} md={3}>
//                                         <p className='projectDefinition'>By counting people as residents in the town that they are jailed, the Census Bureau actively defies most state constitutions. This is frustrating considering inmates are not allowed to vote and in most cases, return to their residence after they get released.</p>
//                                 </Grid>

//                                 <Grid item xs={9} md={3}>
//                                         <p className='projectDefinition'>This antiquated approach to counting doesn't work with the current use of Census Data for redistricting. Simply put, states can't fully create fair and equal districts if the data that decisions are based upon is abundantly incorrect.</p>
//                                 </Grid>
                            
//                             </Grid>
//                             </Box>
//                         </Grid>
//                         </Grid>
//                 </Box>
              

//                 <Box sx={{ flexGrow: 1, }} className='onlyOnMobile'>
//                     <Grid container spacing={{ xs: 2, md: 2 }}> 
                            
                        
//                         <Grid item xs={9} md={7}>
//                         {/* <Grid item xs={3} sm={3} md={3} className='fullWidthTitle'> */}
//                                 <HeadingThree pageNum={pageNum}/>
                           
                            
                            
//                             <Grid container direction="row" justifyContent='space-between' alignItems='center'>
//                                 <Grid item xs={9} md={3}>
//                                     <p className='projectDefinition'>How the Census Bureau counts incarcerated people creates a big issue for our nations democracy. Incarcerated individuals get counted wherever they end up jailed, not their actual home or community. This complicates community research and planning and skews representation both locally and federally.</p>
//                                 </Grid>

//                                 <Grid item xs={9} md={3}>
//                                         <p className='projectDefinition'>By counting people as residents in the town that they are jailed, the Census Bureau actively defies most state constitutions. This is frustrating considering inmates are not allowed to vote and in most cases, return to their residence after they get released.</p>
//                                 </Grid>

//                                 <Grid item xs={9} md={3}>
//                                         <p className='projectDefinition'>This antiquated approach to counting doesn't work with the current use of Census Data for redistricting. Simply put, states can't fully create fair and equal districts if the data that decisions are based upon is abundantly incorrect.</p>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                 </Grid>
//             </Box>
//         </>
//     )
// }