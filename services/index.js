import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PRIVATE_BLOG_SERVER_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

export default client;
