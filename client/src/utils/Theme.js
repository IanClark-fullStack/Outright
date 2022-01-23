import OutrightTTF from '.././assets/font/OutRight-Variable.ttf';
import OutrightWOFF2 from '.././assets/font/OutRight-Variable.woff2';
import OutrightWoff from '.././assets/font/OutRight-Variable.woff';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const outrightTheme = createTheme({
    typography: {
        fontFamily: [
            'OutrightWOFF2', 'OutrightWoff'
        ].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                font-family: 'Outright';
                font-style: normal;
                font-display: swap;
                font-weight: 100 900;
                src: local('OutrightWOFF2'), local('OutrightWOFF2'), url(${OutrightWOFF2}) format('woff2'), url(${OutrightWoff})
                format("woff");
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
            `,
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                h1: 'h2',
                h2: 'h2',
                h3: 'h2',
                h4: 'h2',
                h5: 'h2',
                h6: 'h2',
                subtitle1: 'h2',
                subtitle2: 'h2',
                body1: 'span',
                body2: 'span',
                },
            },
        },
    },
});
