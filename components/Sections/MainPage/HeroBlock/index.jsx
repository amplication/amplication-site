import Image from 'next/image';
import Link from 'next/link';
import VideoWatch from '../../../../public/images/video-watch.png';
import {useEffect, useState, useCallback} from 'react';
import * as analytics from '../../../../lib/analytics';

const HeroBlock = () => {
  const [starsCount, setStarsCount] = useState(8.7);
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'developers-hero',
      },
    });
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/amplication/amplication', {
      'Content-Type': 'application/json',
    })
      .then(response => response.json())
      .then(data => {
        if (data.stargazers_count) {
          setStarsCount(parseFloat((data.stargazers_count / 1000).toFixed(1)));
        }
      });
  }, []);

  return (
    <>
      <section className="page-welcome !pt-10 !pb-8 large:!py-[9vh] xlg:!py-[17vh]">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video align-items-center">
                <div className="content-block">
                  <div className="animated-header">
                    <Link
                      href={'https://github.com/amplication/amplication'}
                      passHref={true}
                    >
                      <a className="group btn btn-lg mb-4 !text-xs !leading-5 !font-normal !h-fit text-white !w-auto !flex-none !rounded-full border border-solid !border-dark-black-70 !px-4 !h-[34px] hover:border-lite">
                        <svg
                          className="mr-2"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 0C2.24 0 0 2.295 0 5.126c0 2.265 1.433 4.187 3.42 4.865.25.047.33-.112.33-.247V8.79c-1.39.31-1.68-.605-1.68-.605-.228-.592-.556-.75-.556-.75-.454-.318.035-.311.035-.311.502.035.766.528.766.528.446.783 1.17.557 1.455.426.045-.331.174-.558.318-.685-1.11-.13-2.278-.57-2.278-2.534 0-.56.195-1.017.515-1.376-.052-.13-.223-.651.048-1.357 0 0 .42-.137 1.376.526.398-.114.826-.17 1.251-.173.425.002.853.059 1.253.173.954-.663 1.373-.526 1.373-.526.272.706.101 1.228.05 1.357.32.359.514.816.514 1.376 0 1.969-1.17 2.403-2.283 2.53.18.158.343.47.343.949v1.406c0 .137.08.297.334.247C8.569 9.31 10 7.39 10 5.126 10 2.296 7.761 0 5 0Z"
                            fill="#fff"
                          />
                        </svg>
                        {starsCount}K <span className="pl-2">Star Us</span>
                      </a>
                    </Link>
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
                    <div className="explainer text-base laptop:text-lg large:text-xl text-white !mt-2">
                      Amplication is a&nbsp;
                      <span className="highlight">
                        flexible open-source Node.js
                      </span>{' '}
                      app development platform. It helps you build
                      production-ready Node.js backend without wasting time on
                      repetitive&nbsp;coding.
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
                    <Link
                      href={'https://docs.amplication.com/getting-started/'}
                      passHref={true}
                    >
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
        </div>
      </section>
    </>
  );
};

export default HeroBlock;
