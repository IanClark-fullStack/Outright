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


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Title /> */}
          <p>
            Edit <code>ABABAB</code> and save to reload.
          </p>
          <a
            className="App-link"
            // style={{fontWeight: "900"}}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          ABCDEFGHIJKLM
          </a>
          <Home />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
