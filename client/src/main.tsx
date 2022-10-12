import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
<<<<<<< HEAD
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
=======
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:4000/graphql'
>>>>>>> updates
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<<<<<<< HEAD
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
=======
    <Provider value={client}>
      <App />
    </Provider>
>>>>>>> updates
  </React.StrictMode>
)
