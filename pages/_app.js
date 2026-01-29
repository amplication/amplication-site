import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import PropTypes from 'prop-types';

import '../styles/globals.css';

function Amplication({ Component, pageProps }) {
  const router = useRouter();

  const canonicalUrl = (
    process.env.NEXT_PUBLIC_SITE + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <DefaultSeo canonical={canonicalUrl} />

      {getLayout(<Component {...pageProps} />)}
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={'true'}
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

Amplication.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default Amplication;
