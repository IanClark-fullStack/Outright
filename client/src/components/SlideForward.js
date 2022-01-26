import React, { useState } from 'react';
import { Slide, Grid, Switch, Box, Button, FormControlLabel } from '@mui/material';
import Title from './Title';


const icon = ( <Box component="svg" sx={{ width: 100, height: 100 }}>
                <Box
                component="polygon"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
                points="0,100 50,00, 100,100"
                />
                </Box> );

export default function SlideForward({ pageNum, viewForward }) {
    const [checked, setChecked] = React.useState(false);
    // const containerRef = React.useRef(null);
    console.log(pageNum)
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    
    return (
        <Box
            sx={{
                height: 1200,
                width: 800,
                display: 'flex',
                padding: 2,
                borderRadius: 1,
                bgcolor: (theme) =>
                theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
                overflow: 'hidden',
            }}
           
        >
           
            <Button checked={checked} onChange={handleChange} onClick={() => viewForward(pageNum)} sx={{ width: 0, height: 0, borderBottom: '60px solid transparent', borderTop: '60px solid transparent', borderLeft: '60px solid green', }}> My button </Button>
            {/* <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show from target"
            /> */}
            <Slide direction="left" in={checked}>
                <Title />
            </Slide>
       
    </Box>
);
    
}