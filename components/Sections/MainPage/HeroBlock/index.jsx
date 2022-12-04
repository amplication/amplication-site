import Image from 'next/image';
import Link from 'next/link';
import VideoIcon from '../../../../public/images/video.svg';
import ImageIcon from '../../../../public/images/image.svg';
import {useEffect, useState} from 'react';

const HeroBlock = () => {
  const [starsCount, setStarsCount] = useState(8.7);

  useEffect(() => {
    const headers = { 'Content-Type': 'application/json' }
    fetch(
      'https://api.github.com/repos/amplication/amplication',
      {
        'Content-Type': 'application/json'
      })
      .then(response => response.json())
      .then(data => {
        if (data.stargazers_count) {
          setStarsCount(parseFloat((data.stargazers_count / 1000 ).toFixed(1)))
        }
      });
  }, []);

  return (
    <>
      <section className="page-welcome">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center large:pt-24">
            <div className="col-12 text-center">
              <div className="header-and-video align-items-center">
                <div className="content-block">
                  <div className="animated-header">
                    <h1 className="main-title">
                      <span className="animated-header__fixed-text">
                        Instantly generate
                      </span>
                      <span
                        id="animated-header-typed"
                        className="animated-header__animated-text"
                      ></span>
                      <span className="animated-header__fixed-text">
                        Just code what matters.
                      </span>
                    </h1>
                    <div id="animated-header-content" style={{display: 'none'}}>
                      <span>Microservices.</span>
                      <span>GraphQL API.</span>
                      <span>REST API.</span>
                      <span>Authentication.</span>
                      <span>Authorization.</span>
                      <span>Admin UI.</span>
                    </div>
                    <div className="explainer text-base laptop:text-lg large:text-xl text-white !mt-10">
                      Amplication is a&nbsp;
                      <span className="highlight">
                        flexible open-source Node.js
                      </span>{' '}
                      app development platform. It helps you build production-ready
                      Node.js backend without wasting time on
                      repetitive&nbsp;coding.
                    </div>
                  </div>
                  <div className="buttons-wrapper d-flex align-items-center justify-content-start mt-4">
                    <Link href={'https://app.amplication.com'} passHref={true}>
                      <a className="btn btn-primary btn-lg  mb-4">
                        Get Started
                      </a>
                    </Link>
                    <div className="spacer"></div>
                    <Link
                      href={'https://discord.gg/Z2CG3rUFnu'}
                      passHref={true}
                    >
                      <a
                        target="_blank"
                        className="btn btn-outline-secondary btn-lg  mb-4 text-black80"
                        rel="noreferrer"
                      >
                        <span className="social-link discord social-white">
                          {' '}
                        </span>
                        Join Discord
                      </a>
                    </Link>
                    <div className="d-lg-none spacer"></div>
                    <Link
                      href={'https://docs.amplication.com/getting-started'}
                      passHref={true}
                    >
                      <a className="d-lg-none btn btn-outline-secondary btn-lg mb-4 text-black80">
                        Documentation
                      </a>
                    </Link>
                    <div className="spacer"></div>
                    <Link
                      href={'https://github.com/amplication/amplication-site'}
                      passHref={true}
                    >
                      <a className="group btn btn-lg mb-4 text-white !w-auto !flex-none !px-0">
                        <svg className="mr-2" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 0C5 0 0 5 0 11.3c0 5 3.2 9.2 7.5 10.7.6 0 .8-.3.8-.6v-2C5.2 20 4.5 18 4.5 18c-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1 0 1.7 1.1 1.7 1.1 1 1.8 2.6 1.3 3.2 1 0-.8.4-1.3.7-1.5-2.5-.3-5-1.3-5-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 1-.3 3 1.1a10.3 10.3 0 0 1 5.6 0c2-1.4 3-1.1 3-1.1.6 1.5.2 2.7 0 3 .8.8 1.2 1.8 1.2 3 0 4.3-2.6 5.3-5 5.6.4.3.8 1 .8 2v3.1c0 .3.1.7.7.6 4.4-1.5 7.5-5.7 7.5-10.7C22 5 17 0 11 0Z" fill="#fff"/>
                        </svg>
                        {starsCount}K <span className="underline group-hover:no-underline pl-2">Star Us</span>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="video flex align-items-center" data-aos="zoom-in" data-aos-delay="200">
                  <Link
                    href={'https://www.youtube.com/watch?v=wCJ2jF1IU7U'}
                    passHref={true}
                  >
                    <a data-lity={true}>
                      <Image src={ImageIcon} alt={''} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBlock;
