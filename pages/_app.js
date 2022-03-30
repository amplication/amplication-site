import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../services/index";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";
import Typed from 'typed.js';
import dynamic from 'next/dynamic';
import { createPopper } from '@popperjs/core';
import Script from "next/script";
import Image from "next/image";
import { useRouter } from 'next/router';

function Amplication({ Component, pageProps }) {
  const { asPath } = useRouter();
  const isBlogPage = Boolean( asPath.includes('/blog') || asPath.includes('/tags') );

  useEffect(() => {
    // Scroll effects
    AOS.init({
      easing: "ease-out-back",
      duration: 1000,
    });

    // Typing letter animation
    const typingAnimations = document.querySelectorAll("#animated-header-typed");
    if (typingAnimations.length) {
      let typed = new Typed("#animated-header-typed", {
        stringsElement: "#animated-header-content",
        typeSpeed: 60,
        backSpeed: 20,
        backDelay: 1700,
        startDelay: 0,
        smartBackspace: false,
        loop: true,
      });
    }

    // Run code on client-side only : ensure document is here
    if (typeof document !== undefined) {
      require('bootstrap/dist/js/bootstrap');
      require('lity/dist/lity.min.js');
      require('lity/dist/lity.min.css');
      if (!isBlogPage) {
        require('../public/styles/style.css');
      }
    }
  }, [isBlogPage]);



  return (
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
      {/*<Image*/}
      {/*  className={'hidden'}*/}
      {/*  width={'1px'}*/}
      {/*  height={'1px'}*/}
      {/*  alt={''}*/}
      {/*  src={'https://www.facebook.com/tr?id=694076677979309&ev=PageView&noscript=1'}*/}
      {/*/>*/}
      {/*Google Tag Manager*/}
      <Script
        id={'gtag'}
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-455018710"
      />
      <Script
        id={'gtag-manager'}
        strategy={'afterInteractive'}
        dangerouslySetInnerHTML={{
          __html: `
            function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","AW-455018710");
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
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default Amplication
