import React, { useState } from 'react';
import {  Grid, Button } from '@mui/material';

export default function BackButton({ checked, pageNum, handleChange, viewBackward }) {
    // const containerRef = React.useRef(null);
    console.log(pageNum)
    

    return (
        <>
        <Grid item
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <Button 
                checked={checked} 
                onChange={handleChange} 
                onClick={() => viewBackward(pageNum)} 
                className='body1' 
                sx={{ 
                    width: 20, 
                    height: 0, 
                    fontFamily: 'neue-haas-grotesk-display, sans-serif', 
                    color: 'black', 
                    fontSize: 12,  
                }} 
                startIcon={
                    <span style={{ width: 0, height: 0, borderBottom: '10px solid transparent', borderTop: '10px solid transparent', borderRight: '10px solid black', padding: 0, }}></span>
                }
            >  
            Back
            </Button>

        </Grid>
        </>
    )
}