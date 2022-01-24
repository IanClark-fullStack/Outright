import React, { useState } from 'react';
import { Slide, Grid, Switch, Box, Button, FormControlLabel } from '@mui/material';

export default function ForwardButton({ checked, pageNum, handleChange, viewForward }) {
    const containerRef = React.useRef(null);
    // const containerRef = React.useRef(null);
    return (
        <>
        
            <div className='onlyOnDesktop'>
                <Grid item
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Button 
                        checked={checked} 
                        onChange={handleChange} 
                        onClick={() => viewForward(pageNum)} 
                        sx={{ 
                            width: 20, 
                            height: 0, 
                            fontFamily: 'neue-haas-grotesk-display, sans-serif', 
                            color: 'black', 
                            fontSize: 12,  
                        }} 
                        endIcon={
                            <span style={{ width: 0, height: 0, borderBottom: '10px solid transparent', borderTop: '10px solid transparent', borderLeft: '10px solid black', padding: 0, }}></span>
                            }>  

                    Learn&nbsp;More 
                    </Button>
                </Grid>
            </div>
            <div className='onlyOnMobile'>
            <Grid container spacing={2} sx={{ marginTop: '2.5rem', marginLeft: 0,}}>
                <Grid 
                    item 
                    xs={12} sm={12} 
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Button 
                        checked={checked} 
                        onChange={handleChange} 
                        onClick={() => viewForward(pageNum)} 
                        sx={{ 
                            width: 20, 
                            height: 0, 
                            fontFamily: 'neue-haas-grotesk-display, sans-serif', 
                            color: 'black', 
                            fontSize: 12,  
                        }} 
                        endIcon={
                            <span style={{ width: 0, height: 0, borderBottom: '10px solid transparent', borderTop: '10px solid transparent', borderLeft: '10px solid black', padding: 0, }}></span>
                            }>  

                    
                    </Button>
                </Grid>
                </Grid>
            </div>
        
        </>
    )
}