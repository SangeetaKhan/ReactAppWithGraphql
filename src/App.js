import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  ApolloProvider 
} from 'react-apollo';
import ApolloClient from 'apollo-boost' 
import Dashboard from './components/Dashboard/Dashboard';

const client = new ApolloClient({
  uri: 'http://smart-meeting.herokuapp.com',
  headers:{token:"a123gjhgjsdf6576"},
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Dashboard/>
    </ApolloProvider>
  );
}

export default App;
