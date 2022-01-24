// import { geolocated } from "react-geolocated";
import React, { useState, useRef } from 'react';
import Title from '../components/Title'; 
import Location from '../components/Location';
import BackButton from '../components/BackButton';
import ForwardButton from '../components/ForwardButton';
import SlideForward from '../components/SlideForward';
import { Grid, Slide, Box, Button } from '@mui/material';
export default function Home() {
    const [pageNum, setPageNum] = useState(1);
    const [checked, setChecked] = React.useState(false);
    const containerRef = React.useRef(null);
    // const containerRef = React.useRef(null);
    console.log(pageNum)
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    const viewForward = (num) => setPageNum(num + 1);
    const viewBackward = (num) => setPageNum(num - 1);
    const defaultView = () => {
        if (pageNum === 1) {
            return <>
            <Grid container spacing={2} sx={{ marginTop: '2.5rem', marginLeft: 0,}}>
                <Grid 
                    item 
                    xs={1} sm={1} 
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                        
                        <BackButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewBackward={viewBackward} />
                    {/* <Button checked={checked} onChange={handleChange} onClick={() => viewForward(pageNum)} sx={{ width: 0, height: 0, borderBottom: '12px solid transparent', borderTop: '12px solid transparent', borderRight: '12px solid black', padding: 0, display: 'inline-block' }}>  </Button> */}
                </Grid>

                <Grid item xs={12} sm={12} md={10}>
                    <Location />
                    <div className='onlyOnMobile'>
                        <ForwardButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewForward={viewForward} />
                    </div>  
                </Grid>

                <div className='onlyOnDesktop'>
                    <Grid 
                        item 
                        xs={12} sm={12} md={1} 
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-end"
                    >
                        
                        <ForwardButton checked={checked} handleChange={handleChange} pageNum={pageNum} viewForward={viewForward} />
                        {/* <Button checked={checked} onChange={handleChange} onClick={() => viewForward(pageNum)} sx={{ width: 0, height: 0, borderBottom: '12px solid transparent', borderTop: '12px solid transparent', borderLeft: '12px solid black', padding: 0, display: 'inline-block' }}>  </Button> */}
                        
                    </Grid>
                </div>
            </Grid>
            </>
        }
    }
    
  

  
   
    return (
        <main ref={containerRef}>
            <Grid container spacing={2} sx={{ marginTop: '2.5rem',}}>
                {/* <Grid item xs={1} sm={1}>
                    <Button checked={checked} onChange={handleChange} onClick={() => viewBackward(pageNum)} sx={{ width: 0, height: 0, borderBottom: '60px solid transparent', borderTop: '60px solid transparent', borderLeft: '60px solid green', }}> My button </Button>
                </Grid> */}
                <Grid item xs={10} sm={10}> 
                    

                    {/* <SlideForward pageNum={pageNum} viewForward={viewForward} />  */}
                            {defaultView()}

                    {pageNum === 2 &&
                        <Slide direction="left" in={checked} container={containerRef.current}>
                            
                        <Title />
                    </Slide>  
}  
                </Grid>
                {/* <Grid item xs={1} sm={1} direction="row"
                justifyContent="flex-end"
                alignItems="flex-end">
                    <Button checked={checked} onChange={handleChange} onClick={() => viewForward(pageNum)} sx={{ width: 0, height: 0, borderBottom: '26px solid transparent', borderTop: '26px solid transparent', borderLeft: '26px solid green' }}> My button </Button>
                </Grid> */}
            </Grid>
            
                {/* {pageSelect === 2 && <Projects />}
                {pageSelect === 3 && <Contact />}
                {pageSelect === 4 && <Resume />} */}
            {/* <Footer />  */}
        </main>
  )  
};
