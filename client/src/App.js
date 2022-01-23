import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'; 
import OutrightWOFF2 from './assets/font/OutRight-Variable.woff2';
import OutrightWoff from './assets/font/OutRight-Variable.woff';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Title from './components/Title';
// import { useEffect } from 'react';
// // import { createLocation } from './utils/API';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  console.log(`Bearer ${token}`);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const theme = createTheme({
//     typography: {
//         fontFamily: [
//             'OutrightWOFF2',
//         ].join(','),
//     },
//     components: {
//         MuiCssBaseline: {
//             styleOverrides: `
//                 @font-face {
//                 font-family: 'Outright';
//                 font-style: normal;
//                 font-display: swap;
//                 font-weight: 100 900;
//                 src: local('OutrightWOFF2'), local('OutrightWOFF2'), url(${OutrightWOFF2}) format('woff2');
//                 unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//                 }
//             `,
//         },
//         MuiTypography: {
//           defaultProps: {
//             variantMapping: {
//               h1: 'h2',
//               h2: 'h2',
//               h3: 'h2',
//               h4: 'h2',
//               h5: 'h2',
//               h6: 'h2',
//               subtitle1: 'h2',
//               subtitle2: 'h2',
//               body1: 'span',
//               body2: 'span',
//             },
//           },
//         },
//     },
// });
// theme.typography.h1 = {
//   fontSize: '8rem',
//   '@media (min-width:600px)': {
//     fontSize: '12rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '26.5rem',
//     lineHeight: '23rem'
//   },
// };
// theme.typography.h5 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <ThemeProvider theme={theme}> */}
      <div className="App">
        
        
            
              <header className="App-header">
              
                <Home />
                
              </header>
        
      </div>
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
}

export default App;
