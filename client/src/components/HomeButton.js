
import { styled, Button, Link } from '@mui/material';

const ColorWhiteButton = styled(Button)(({ theme }) => ({
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


export default function HomeButton({ pageNum, viewHome }) {
    return (
        
        <ColorWhiteButton variant="contained" onClick={viewHome}>Home</ColorWhiteButton>
    );
}