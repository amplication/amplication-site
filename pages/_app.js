import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../services/index";

function Amplication({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default Amplication
