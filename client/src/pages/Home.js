// import { geolocated } from "react-geolocated";
import React, { useState, useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Title from '../components/Title'; 
import Location from '../components/Location';
import BackButton from '../components/BackButton';
import ForwardButton from '../components/ForwardButton';
import outrightHeader from '../assets/images/prison-yard-outright.png';
import About from './About';
import Solution from './Solution';
import HomeButton from '../components/HomeButton';
import ProceedingNav from '../components/ProceedingNav';
import courtHouse from '../assets/images/comp1/service-pnp-hec.png';
import voteCount from '../assets/images/comp1/service-pnp.png';
import prisonYard from '../assets/images/comp1/Prison-yard-outright2.png';
import outrightHeaderCols from '../assets/images/comp1/outright-headerCols1.jpg';
import SlideForward from '../components/SlideForward';
import { Grid, Slide, Box, Button, Item } from '@mui/material';

const useStyles = makeStyles(theme => ({
    mainFeatured: {
        height: 400,
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${outrightHeader})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    mainFeaturedContent: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    columnsFeatured: {
        height: 212,
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${outrightHeaderCols})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    columnsFeaturedContent: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function Home() {
    const [pageNum, setPageNum] = useState(1);
    const [checked, setChecked] = React.useState(false);
    
    // const containerRef = React.useRef(null);
    const classes = useStyles();
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
                        <header>
                            {/* <img src={outrightHeader} className={classes.mainFeatured} alt="logo" /> */}
                            <Grid container className={classes.mainFeatured}></Grid>
                        </header>
                        
                        <section style={{margin: '1rem 1rem'}}>
                            <Box sx={{ flexGrow: 1, }}>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                                    <Grid item xs={3} sm={3} md={11}>
                                        <Location pageNum={pageNum} />
                                    </Grid>

                                    <Grid item xs={1} sm={1} md={1}>

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
                        <header className='onlyOnMobile'>
                        
                            {/* <img src={outrightHeader} className={classes.mainFeatured} alt="logo" /> */}
                            <Grid container className={classes.columnsFeatured}></Grid>
                        
                        </header>

                        <section className='deskSpace'>
                            <Box sx={{ flexGrow: 1,}}>
                                <ProceedingNav />
                                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 5, sm: 5, md: 12 }} className='smallSideNav'>

                                        <Grid item xs={1} sm={1} md={1}> 

                                            <Grid container direction="column" justifyContent='space-evenly' alignItems="flex-start" className='shiftDown'>
                                                <BackButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewBackward={viewBackward} />
                                                <p className='subTitle'>{`0${refNum}`}</p>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={4} md={10}>
                                            {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={5}> */}
                                                <About pageNum={pageNum} />
                                            {/* </Grid> */}
                                        </Grid>

                                        <Grid item xs={4} sm={4} md={1}>
                                            <Grid container direction='row' justifyContent='flex-end' alignItems='flex-start'>
                                                <ForwardButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewForward={viewForward} />
                                            </Grid>
                                        </Grid>

                                    </Grid>           
                            </Box>

                            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-end">
                                <HomeButton pageNum={pageNum} viewHome={viewHome} />
                            </Grid>

                        </section>
                    </>
            
                }  
                {pageNum === 3 &&
                    <>
                        <header className='onlyOnMobile'>
                        
                            {/* <img src={outrightHeader} className={classes.mainFeatured} alt="logo" /> */}
                            <Grid container className={classes.columnsFeatured}></Grid>
                        
                        </header>

                        <section className='deskSpace'>
                            <Box sx={{ flexGrow: 1,}}>
                                <ProceedingNav />
                                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }} className='smallSideNav'>
                                        
                                        <Grid container direction='row' justifyContent='space-between' alignItems='flex-start'>
                                            <Grid item xs={1} md={1}>
                                                <BackButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewBackward={viewBackward} />
                                                
                                                <p className='subTitle'>{`0${refNum}`}</p>
                                            </Grid>
                                            <Grid item xs={1} md={1}>
                                                <ForwardButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewForward={viewForward} />
                                                
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={4} md={12}>
                                            {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={5}> */}
                                                <Solution pageNum={pageNum} />
                                            {/* </Grid> */}
                                        </Grid>

                                       

                                        

                                        <Grid item xs={4} sm={4} md={1}>
                                            <Grid container direction='row' justifyContent='flex-end' alignItems='flex-start'>
                                                <ForwardButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewForward={viewForward} />
                                            </Grid>
                                        </Grid>

                                    </Grid>           
                            </Box>

                            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-end">
                                <HomeButton pageNum={pageNum} viewHome={viewHome} />
                            </Grid>

                        </section>
                    </>
                }  
                
            </main>
        
        </>
    )   
};
