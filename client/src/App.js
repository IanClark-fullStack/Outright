
import './App.css';
import Home from './pages/Home'; 
import OutrightWOFF2 from './assets/font/OutRight-Variable.woff2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Import Provider to make Each Request work w/ Apollo Server 
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
// Create a link to Graph Ql 
const httpLink = createHttpLink({
  uri: '/graphql',
});
// Create middleware for requests to attach JSON web token as a header for all requests. 
const authLink = setContext((_, { headers }) => {
  // Retrieve token from local storage 
  const token = localStorage.getItem('id_token');
  // Return out of this function --> The headers, so that they will be accessible by the httpLink to Read 
  return {
    headers: {
      // Spread the pre-existing headers
      ...headers, 
      // If a token exists, set it back up 
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

const client = new ApolloClient({
  // Client side setup for middleware authLink execution. Runs before a request hits the GraphQL API. 
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


let theme = createTheme({
    typography: {
        fontFamily: [
            'OutrightWOFF2',
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
                src: local('OutrightWOFF2'), local('OutrightWOFF2'), url(${OutrightWOFF2}) format('woff2');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
            `,
        },
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: 'h2',
              h2: 'h2',
              h3: 'h3',
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
// theme = responsiveFontSizes(theme);
theme.typography.body1 = {
  fontSize: '2rem',
  fontFamily: 'neue-haas-grotesk-display, sans-serif',
};
theme.typography.h1 = {
  fontSize: '8rem',
  lineHeight: '6rem',
  '@media (min-width:600px)': {
    fontSize: '12rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '14.5rem',
    lineHeight: '15rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '32.625rem',
    lineHeight: '34rem',
  },
};
theme.typography.h3 = {
  fontSize: '11rem',
  lineHeight: '11.2rem',
  '@media (min-width:400px)': {
    fontSize: '11rem',
    lineHeight: '11.2rem'
  },
  '@media (min-width:600px)': {
    fontSize: '9rem',
    lineHeight: '9rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '10.5rem',
    lineHeight: '11rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24.625rem',
    lineHeight: '25rem',
  },
};
theme.typography.h5 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ApolloProvider>
  );
}

export default App;
