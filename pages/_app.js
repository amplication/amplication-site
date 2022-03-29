import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../services/index";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";
import Typed from 'typed.js';
// import dynamic from 'next/dynamic';
// import { createPopper } from '@popperjs/core';

function Amplication({ Component, pageProps }) {
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
      // load JS bootstrap dependency
      require('bootstrap/dist/js/bootstrap')
    }
  }, []);



  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default Amplication
