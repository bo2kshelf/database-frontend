import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
import React from 'react';

export const ConfiguredApolloProvider: React.FC<{
  apiEndpoint: string;
}> = ({children, apiEndpoint}) => {
  const httpLink = createHttpLink({
    uri: apiEndpoint,
  });

  const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
