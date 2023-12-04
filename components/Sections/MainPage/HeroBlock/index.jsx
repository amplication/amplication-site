import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import * as analytics from '../../../../lib/analytics';
import VideoWatch from '../../../../public/images/video-watch.png';
import GitHubStarsButton from '../../../Common/GitHubStarsButton';
import Typed from 'typed.js';

const HeroBlock = () => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'developers-hero',
      },
    });
  }, []);

  useEffect(() => {
    const typingAnimations = document.querySelectorAll(
      '#animated-header-typed',
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
  }, []);

  return (
    <>
      <div className="row align-items-center">
        <div className="col-12 text-center">
          <div className="header-and-video align-items-center">
            <div className="content-block">
              <div className="animated-header">
                <GitHubStarsButton
                  className={'!border-dark-black-70 rounded-full'}
                />
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
                <div id="animated-header-content" style={{ display: 'none' }}>
                  <span>Microservices.</span>
                  <span>GraphQL API.</span>
                  <span>REST API.</span>
                  <span>Authentication.</span>
                  <span>Authorization.</span>
                  <span>Admin UI.</span>
                </div>
                <div className="explainer text-base laptop:text-lg large:text-xl text-white !mt-2">
                  Build production-ready services in minutes without wasting
                  time on repetitive coding
                </div>
              </div>
              <div className="buttons-wrapper d-flex align-items-center justify-content-start">
                <Link href={'https://app.amplication.com'} passHref={true}>
                  <a
                    onClick={handleStartNowClick}
                    className="btn btn-primary btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px]"
                  >
                    Get Started
                  </a>
                </Link>
                <div className="spacer"></div>
                <Link href={'https://docs.amplication.com/'} passHref={true}>
                  <a
                    target="_blank"
                    className="btn btn-outline-light btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px] text-black80"
                    rel="noreferrer"
                  >
                    Documentation
                  </a>
                </Link>
              </div>
            </div>
            <div className="video flex align-items-center">
              <div className="relative align-items-center !max-w-[92%] w-full min-h-[600px] hidden medium:flex align-items-center laptop:!max-w-[56%]">
                <div className="absolute laptop:my-auto !-mt-24 w-[84vw] medium:flex align-items-center">
                  <Link
                    href={'https://www.youtube.com/watch?v=Kn5cNlUecCs'}
                    passHref={true}
                  >
                    <a data-lity={true}>
                      <Image src={VideoWatch} alt={''} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBlock;
