import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as analytics from '../../../../lib/analytics';
import HeroImage from '../../../../public/images/hacktoberfest/hero.svg';

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
                <div className="relative align-items-center flex-col  w-full  flex ">
                  <div>
                    <Image src={HeroImage} alt={'Amplication platform'} />
                  </div>
                  <span className="block font-bold">
                    Celebrate Open-source and Hacktoberfest 2023 with
                    Amplication
                  </span>
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
