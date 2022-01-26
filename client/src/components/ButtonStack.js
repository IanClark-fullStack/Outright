
import { styled, Stack, Button, Link } from '@mui/material';

const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
        },
        '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
        },
        '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
});  

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
            <ColorButton variant="contained">Download</ColorButton>
            <ColorButton variant="contained" disabled>Version 1.0</ColorButton>
            <ColorButton variant="contained" disabled>Ⓒ2022</ColorButton>
        </Stack>
    );
}