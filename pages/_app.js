import {ApolloProvider} from '@apollo/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Script from 'next/script';
import {useRouter} from 'next/router';
import {DefaultSeo} from 'next-seo';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import Typed from 'typed.js';

import '../styles/globals.css';
import client from '../services/index';
import * as analytics from '../lib/analytics';

function Amplication({Component, pageProps}) {
  const {asPath} = useRouter();
  const isBlogPage = Boolean(
    asPath.includes('/blog') || asPath.includes('/tags')
  );

  const router = useRouter();

  const canonicalUrl = (
    process.env.NEXT_PUBLIC_SITE + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];

  useEffect(() => {
    const handleRouteChange = url => {
      analytics.page(url, {url});
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Scroll effects
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000,
    });

    const typingAnimations = document.querySelectorAll(
      '#animated-header-typed'
    );
    if (typingAnimations.length) {
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
      require('bootstrap/dist/js/bootstrap');
      require('lity/dist/lity.min.js');
      require('lity/dist/lity.min.css');
      if (!isBlogPage) {
        require('../public/styles/style.css');
      }
    }
  }, [isBlogPage]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        {/*Facebook Pixel*/}
        <Script
          id={'facebook-pixel'}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(e,t,n,c,o,a,f){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(a=t.createElement(n)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",(f=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,f))}(window,document,"script"),fbq("init","694076677979309"),fbq("track","PageView");
          `,
          }}
        />
        {/*Hotjar Tracking Code*/}
        <Script
          id={'hotjar'}
          strategy={'afterInteractive'}
          dangerouslySetInnerHTML={{
            __html: `
            !function(t,h,e,j,s,n){t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:2379815,hjsv:6},s=h.getElementsByTagName("head")[0],(n=h.createElement("script")).async=1,n.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,s.appendChild(n)}(window,document);
          `,
          }}
        />
        <Script
          id={'intercomSettings'}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.intercomSettings = {
              app_id: "rtlni1hg"
            };
          `,
          }}
        />
        <Script
          id={'intercom'}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/rtlni1hg';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `,
          }}
        />
        <Script
          id={'segment'}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="GpXLWZ8HnAhUuUfZBs6bE5IE87yHmBtu";analytics.SNIPPET_VERSION="4.13.2";
            analytics.load("GpXLWZ8HnAhUuUfZBs6bE5IE87yHmBtu");
            analytics.page();
            }}();
          `,
          }}
        />
        {/* Prevents HubSpot from loading form collector */}
        <hs id={'CollectedForms-25691669'} />
        {/* HubSpot */}
        <Script
          id={'hs-script-loader'}
          strategy="afterInteractive"
          src="//js-eu1.hs-scripts.com/25691669.js"
        />
        {/* Google Tag Manager */}
        <Script
          id={'gtm'}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TQF7HCF');
          `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQF7HCF"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        <DefaultSeo canonical={canonicalUrl} />
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </>
  );
}

Amplication.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default Amplication;
