import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://blog-api.amplication.com/graphql',
    cache: new InMemoryCache()
});

export default client
