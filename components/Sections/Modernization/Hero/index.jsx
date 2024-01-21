import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as analytics from '../../../../lib/analytics';
import AppDashboard from '../../../../public/images/modernization/application-modernization.svg';

const Hero = () => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'hero',
      },
    });
  }, []);

  const handleBookDemoClick = useCallback(() => {
    analytics.event({
      action: 'bookDemoClicked',
      params: {
        buttonLocation: 'hero',
      },
    });
  }, []);

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
                        Modernize, Transform and Migrate Legacy Systems with
                        Amplication
                      </span>
                      <span className="sub-title">
                        Empower your business with modern applications.
                        Streamline and revolutionize your development process.
                      </span>
                    </h1>
                  </div>
                  <div className="d-flex tablet:align-items-center justify-content-start mt-2">
                    <Link
                      href={process.env.NEXT_PUBLIC_BOOK_MEETING_URL}
                      passHref={true}
                    >
                      <a
                        onClick={handleBookDemoClick}
                        className="btn btn-primary btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px]"
                        target="_blank"
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
                        onClick={handleStartNowClick}
                        className="btn btn-outline-light btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px] text-black80"
                      >
                        Try Free
                      </a>
                    </Link>
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
