import {useCallback} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppDashboard from '../../../../public/images/enterprise/app-dashboard.png';
import * as analytics from '../../../../lib/analytics';

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
                <div className="content-block medium:!max-w-[50%]">
                  <div className="animated-header">
                    <h1 className="main-title mb-0 font-bold !text-[40px] large:!text-[56px] leading-[84px]">
                      Accelerate Your Business <br /> with Amplication
                      Enterprise
                      <span className="block text-[24px] large:text-[32px] leading-[1.475em] mt-2">
                        Automated, customizable solutions for
                        <br /> faster application development
                      </span>
                    </h1>
                    <div className="explainer text-sm laptop:text-base large:text-lg text-white !mt-3 !mb-4 !max-w-[720px]">
                      Unleash the power of fast development cycles with
                      Amplication Enterprise. Our secure, automated and
                      customizable solutions give teams an edge when it comes to
                      rapidly launching applications that meet any business
                      requirements.
                    </div>
                  </div>
                  <div className="d-flex tablet:align-items-center justify-content-start mt-2">
                    <Link href={'/contact-us'} passHref={true}>
                      <a
                        onClick={handleStartNowClick}
                        className="btn btn-primary btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px]"
                      >
                        Book a Demo
                      </a>
                    </Link>
                    <div className="spacer"></div>
                    <Link
                      href={'https://app.amplication.com/login'}
                      passHref={true}
                    >
                      <a
                        onClick={handleBookDemoClick}
                        className="btn btn-outline-light btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px] text-black80"
                      >
                        Start Now
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="relative align-items-center max-medium:mt-12 middle:!max-w-[90%] w-full middle:min-h-[600px] flex align-items-center medium:!max-w-[46%]">
                  <div className="middle:my-auto min-w-full max-w-[1280px] middle:flex align-items-center">
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