import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Typed from 'typed.js';

import '../styles/globals.css';
import '../styles/stigg.css';
import 'react-loading-skeleton/dist/skeleton.css';
import "../styles/bootstrap-wrapper.scss"
import client from '../services/index';
import * as analytics from '../lib/analytics';

function Amplication({ Component, pageProps }) {
  const { asPath } = useRouter();
  const isBlogPage = Boolean(
    asPath.includes('/blog') || asPath.includes('/tags'),
  );

  const router = useRouter();
  const isDevPage = Boolean(router.pathname === '/developers');

  const canonicalUrl = (
    process.env.NEXT_PUBLIC_SITE + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];

  useEffect(() => {
    const handleRouteChange = (url) => {
      analytics.page(url, { url });
    };
    analytics.page(router.asPath, { url: router.asPath });
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.asPath]);

  useEffect(() => {
    const typingAnimations = document.querySelectorAll(
      '#animated-header-typed',
    );
    if (typingAnimations.length && isDevPage) {
      new Typed('#animated-header-typed', {
        stringsElement: '#animated-header-content',
        typeSpeed: 60,
        backSpeed: 20,
        backDelay: 1700,
        startDelay: 0,
        smartBackspace: false,
        loop: true,
      });
    }

    // Run code on client-side only : ensure document is here
    if (typeof document !== 'undefined') {
      require('lity/dist/lity.min.js');
      require('lity/dist/lity.min.css');
      require('../public/styles/vars.css');
      if (isBlogPage) {
        require('../public/styles/blog.css');
      } else {
        require('../public/styles/style.css');
      }
    }
  }, [isBlogPage, isDevPage]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <DefaultSeo canonical={canonicalUrl} />

        {getLayout(<Component {...pageProps} />)}
        {/*Google Fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'true'}
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Poppins:wght@300;400;500;600;700;800&family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
        {/*Facebook Pixel*/}
        <Script
          id={'facebook-pixel'}
          strategy={'afterInteractive'}
          dangerouslySetInnerHTML={{
            __html: `
            !function(e,t,n,c,o,a,f){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(a=t.createElement(n)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",(f=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,f))}(window,document,"script"),fbq("init","694076677979309"),fbq("track","PageView");
          `,
          }}
        />
        {/*Hotjar Tracking Code*/}
        <Script
          id={'hotjar'}
          strategy={'lazyOnload'}
          dangerouslySetInnerHTML={{
            __html: `
            !function(t,h,e,j,s,n){t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:2379815,hjsv:6},s=h.getElementsByTagName("head")[0],(n=h.createElement("script")).async=1,n.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,s.appendChild(n)}(window,document);
          `,
          }}
        />
        <Script
          id={'segment'}
          strategy={'afterInteractive'}
          dangerouslySetInnerHTML={{
            __html: `
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="GpXLWZ8HnAhUuUfZBs6bE5IE87yHmBtu";analytics.SNIPPET_VERSION="4.13.2";
            analytics.load("GpXLWZ8HnAhUuUfZBs6bE5IE87yHmBtu");
            }}();
          `,
          }}
        />
        {/* Prevents HubSpot from loading form collector */}
        <hs id={'CollectedForms-25691669'} />
        {/* HubSpot */}
        <Script
          id={'hs-script-loader'}
          strategy={'afterInteractive'}
          src="//js-eu1.hs-scripts.com/25691669.js"
        />
      </ApolloProvider>
    </>
  );
}

Amplication.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default Amplication;
