
import { styled, Stack, Button } from '@mui/material';
import outrightCompressed from '../assets/outrightCompressed.zip';

const ColorButton = styled(Button)(({ theme }) => ({
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    color: '#000',
    border: '2px solid black',
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 50, 
    width: 153,
    height: 49,
    fontSize: '20px',
    lineHeight: 24,
    fontWeight: 600,
    '@media (max-width:600px)': {
        fontSize: '12px',
        lineHeight: 14,
        width: 96,
        height: 31,
        padding: 0,
    },
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white'
    },
    '&:disabled': {
        backgroundColor: 'black',
        color: 'white'
    },
}));


export default function OutlinedButtons() {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <a className='descLink' style={{textDecoration: 'none', underline: 0, }} href={outrightCompressed}> 
                <ColorButton variant="contained" sx={{marginLeft: 0, marginRight: 0,}}>Download</ColorButton>
            </a>
            <ColorButton variant="contained" disabled>Version 1.0</ColorButton>
            <ColorButton variant="contained" disabled>Ⓒ2022</ColorButton>
        </Stack>
    );
}