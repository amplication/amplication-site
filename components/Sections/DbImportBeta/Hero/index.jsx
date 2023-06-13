import {useCallback} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as analytics from '../../../../lib/analytics';
import AppDashboard from '../../../../public/images/enterprise/app-dashboard.svg';

const Hero = () => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'hero',
      },
    });
  });

  const handleBookDemoClick = useCallback(() => {
    analytics.event({
      action: 'bookDemoClicked',
      params: {
        buttonLocation: 'hero',
      },
    });
  });
  return (
    <>
      <section className="page-welcome !pt-10 !pb-8 large:!py-[6vh] xlg:!py-[12vh]">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video align-items-center">
                <div className="content-block medium:!max-w-[46%]">
                  <div className="animated-header">
                    <h1 className="main-title mb-0">
                      <span className="block font-bold">
                        Modernize Faster with Amplication DB Schema Import
                      </span>
                      <span className="sub-title">
                        Join our exclusive beta program to streamline your
                        transition to a modern architecture
                      </span>
                    </h1>
                    <div className="explainer text-sm laptop:text-base large:text-lg text-white !mt-3 !mb-4 !max-w-[710px]">
                      Introducing our new and highly anticipated Database Schema
                      Import feature. It allows you to seamlessly import your
                      existing database schema directly into Amplication. Ideal
                      for modernization initiatives, significantly reduces
                      transition time by preserving your underlying database
                      while you rebuild and enhance your systems.
                    </div>
                  </div>
                </div>
                <div className="relative align-items-center middle:!max-w-[90%] w-full middle:min-h-[600px] flex align-items-center medium:!max-w-[46%]">
                  <div className="absolute laptop:my-auto w-[50vw] -left-16 max-medium:w-full max-medium:left-0 max-medium:relative medium:flex align-items-center">
                    <Image src={AppDashboard} alt={'Amplication platform'} />
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

export default Hero;
